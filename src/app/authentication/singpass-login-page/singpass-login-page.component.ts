import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core';
import { AuthenService } from '@core/service/authen.service';
import { UserService } from '@core/service/user.service';
import { AdminService } from '@core/service/admin.service';
import { SuperAdminService } from 'app/superAdmin/super-admin.service';
import { CommonService } from '@core/service/common.service';
import { TwoFactorAuthService } from '@core/service/twoFactorAuth.service';
import { SettingsService } from '@core/service/settings.service';
import { AppConstants } from '@shared/constants/app.constants';

@Component({
  selector: 'app-singpass-login-page',
  templateUrl: './singpass-login-page.component.html',
  styleUrls: ['./singpass-login-page.component.scss']
})
export class SingpassLoginPageComponent implements OnInit {
  
  isLoading = false;
  extractedName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenService,
    private userService: UserService,
    private adminService: AdminService,
    private superadminservice: SuperAdminService,
    private commonService: CommonService,
    private twoFactorAuthService: TwoFactorAuthService,
    private settingsService: SettingsService
  ) {
    // Extract company name from URL path
    const pathSegments = this.router.url.split('/');
    this.extractedName = pathSegments[1];
  }

  ngOnInit() {
    // Handle SingPass data from URL parameters
    this.route.queryParams.subscribe(params => {
      const dataEncoded = params['data'];
      const logsEncoded = params['logs'];

      if (dataEncoded && logsEncoded) {
        const user = JSON.parse(atob(decodeURIComponent(dataEncoded)));
        const userLogs = JSON.parse(atob(decodeURIComponent(logsEncoded)));

        // Store in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('userLogs', JSON.stringify(userLogs));
        localStorage.setItem('companyId', user.companyId);
        localStorage.setItem('id', user?.id);

        console.log('SingPass User:', user);
        console.log('SingPass Logs:', userLogs);
        
        // Process SingPass login
        this.handleSingPassLogin(user, userLogs);
      } else {
        console.warn('Missing SingPass data in URL');
        // Redirect back to signin if no data
        this.router.navigate(['/authentication/signin']);
      }
    });
  }

  handleSingPassLogin(user: any, userLogs: any): void {
    this.isLoading = true;
    
    // Set accountDetails for SingPass user
    const accountDetails = {
      email: user.email,
      name: user.name || user.given_name,
      picture: user.picture || user.avatar || '',
      sub: user.id || user.sub,
      given_name: user.given_name || user.name,
      family_name: user.family_name || user.last_name || ''
    };
    
    // Get company details
    this.userService
      .getCompanyByIdentifierWithoutToken(this.extractedName)
      .subscribe((res: any) => {
        let companyId = res[0]?.companyId || user.companyId;
        
        // Use socialLogin method for SingPass authentication
        this.authenticationService
          .socialLogin({
            email: user.email,
            social_type: 'SINGPASS',
            social_id: user.id || user.sub,
            companyId: companyId,
            singpass_data: user,
            singpass_logs: userLogs
          })
          .subscribe(
            (userData: any) => {
              if (userData) {
                // Save user info to localStorage
                this.authenticationService.saveUserInfo(userData);
                
                let userId = JSON.parse(localStorage.getItem('user_data')!).user.companyId;
                
                // Get custom role details
                this.superadminservice
                  .getAllCustomRoleById(userId)
                  .subscribe((response: any) => {
                    localStorage.setItem('subdomain', response[0]?.identifier);
                    this.commonService.setRoleDetails(response[0]);
                    this.updateRoleConstants();
                    
                    // Get user type list and save role details
                    this.adminService.getUserTypeList({ allRows: true }, userId).subscribe(
                      (response: any) => {
                        let userType = localStorage.getItem('user_type');
                        let data = response.filter(
                          (item: any) => item.typeName === userType
                        );
                        this.authenticationService.saveRoleDetails(data);
                        
                        // Complete the authentication flow
                        this.setup2FA(user.email);
                      },
                      (error) => {
                        console.error('Error getting user type list:', error);
                        this.handleError('Failed to get user type list.');
                      }
                    );
                  },
                  (error) => {
                    console.error('Error getting custom role:', error);
                    this.handleError('Failed to get custom role.');
                  });
              }
            },
            (err: any) => {
              console.error('Error in SingPass social login:', err);
              this.handleError('SingPass authentication failed.');
            }
          );
      },
      (error) => {
        console.error('Error getting company details:', error);
        this.handleError('Failed to get company details.');
      });
  }

  private updateRoleConstants(): void {
    const roleDetails = this.commonService.getRoleDetails();
    AppConstants.INSTRUCTOR_ROLE = roleDetails.trainer;
    AppConstants.STUDENT_ROLE = roleDetails.learner;
    AppConstants.ALLTHREEROLES = [
      roleDetails.trainer,
      'Admin',
      'admin',
      'Assessor',
    ];
    localStorage.setItem('role_data', JSON.stringify(roleDetails));
  }

  setup2FA(email: string) {
    this.isLoading = true;
    let userId = localStorage.getItem('id');

    if (!userId) {
      this.handleError('User ID not found in local storage.');
      return;
    }

    this.settingsService.getTwoFAById(userId).subscribe(
      (response) => {
        if (response && response[0]?.status == 'on') {
          this.twoFactorAuthService.setup2FA(email).subscribe(
            (setupResponse) => {
              this.router.navigate(['/admin/two-factor-auth'], {
                state: {
                  qrCode: setupResponse.qrCode,
                  secret: setupResponse.secret,
                },
              });
            },
            (setupError) => {
              this.handleError('Failed to set up 2FA.');
            }
          );
        } else {
          this.router.navigate(['/dashboard/dashboard'], { replaceUrl: true });
        }
      },
      (error) => {
        this.handleError('Failed to check 2FA status.');
      }
    );
  }

  handleError(errorMessage: string) {
    console.error(errorMessage);
    this.isLoading = false;
    // Redirect to signin page on error
    this.router.navigate(['/authentication/signin']);
  }

  back(){
   window.history.back();
  }
}
