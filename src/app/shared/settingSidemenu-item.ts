export let MENU_ITEMS: any[] = [];
export let SETTING_SIDEMENU_LIST: any[] = [];
SETTING_SIDEMENU_LIST =[

{
    "collectionName": "sidemenu",
    "MENU_LIST": [
      {
        "title": "Manage Users",
        "id": "student/settings",
        "iconsrc": "supervised_user_circle",
        "class": "menu-toggle",
        "color":"#1e88e5",
        "bgcolor":"#e3f2fd",
        "actions": [],
        "children": [
          {
            "title": "Module Access",
            "id": "user-type",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Edit",
                "id": "edit-module-access",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-module-access",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Role",
            "id": "create-user-role",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-role",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-role",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Department Profile",
            "id": "all-departments",
            "class": "ml-menu",
            "actions": [
              {
                "title": "View",
                "id": "view-dept-profile",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-dept-profile",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Department",
            "id": "create-department",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-dept",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-dept",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-dept",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-dept",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "User Profile",
            "id": "all-user",
            "class": "ml-sub-menu",
            "actions": [],
            "children": [
              {
                "title": "All Users",
                "id": "all-users",
                "class": "ml-menu2",
                "actions": [
                  {
                    "title": "Create",
                    "id": "create-user",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Edit",
                    "id": "edit-user",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "View",
                    "id": "view-user",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Delete",
                    "id": "delete-user",
                    "class": "ml-menu3"
                  }
                ]
              },
              {
                "title": "Trainees",
                "id": "all-students",
                "class": "ml-menu2",
                "actions": [
                  {
                    "title": "Create",
                    "id": "create-student",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Edit",
                    "id": "edit-student",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "View",
                    "id": "view-student",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Delete",
                    "id": "delete-student",
                    "class": "ml-menu3"
                  }
                ]
              },
              {
                "title": "Trainers",
                "id": "all-instructors",
                "class": "ml-menu2",
                "actions": [
                  {
                    "title": "Create",
                    "id": "create-trainer",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Edit",
                    "id": "edit-trainer",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "View",
                    "id": "view-trainer",
                    "class": "ml-menu3"
                  },
                  {
                    "title": "Delete",
                    "id": "delete-trainer",
                    "class": "ml-menu3"
                  }
                ]
              },
              {
                "title": "Staff",
                "id": "all-staff",
                "class": "ml-menu2",
                "actions": []
              }
            ]
          },
          {
            "title": "User Group",
            "id": "user-group",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-user-group",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-user-group",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-user-group",
                "class": "ml-menu3"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "title": "Customize",
        "id": "student/settings/customize",
        "iconsrc": "settings_brightness",
        "class": "menu-toggle",
        "color": "#6a1b9a",
      "bgcolor": "#f3e5f5",
        "actions": [],
        "children": [
          {
            "title": "Side Menu",
            "id": "sidemenu",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Forms",
            "id": "customization-forms",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Certificate",
            "id": "certificate/template",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-certificate",
                "class": "ml-mneu3"
              },
              {
                "title": "Edit",
                "id": "edit-certificate",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-certificate",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Advertisement Banners",
            "id": "banners",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Survey",
            "id": "create-feedback",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "SurveyForm",
            "id": "create-feedback",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Logo",
            "id": "logo-customization",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Edit",
                "id": "edit-logo",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-logo",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Email Templates",
            "id": "email-configuration",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Dashboards",
            "id": "student-dashboard",
            "class": "ml-menu",
            "actions": [],
            "children": []
          }
        ]
      },
      {
        "title": "Configuration",
        "id": "student/settings/configuration",
        "iconsrc": "widgets",
        "class": "menu-toggle",
       "color": "#2e7d32",
      "bgcolor": "#e8f5e9",
        "actions": [],
        "children": [
          {
            "title": "Forms",
            "id": "forms",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Languages",
            "id": "languages",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Vendor",
            "id": "vendor",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-vendor",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-vendor",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-vendor",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Funding/Grant",
            "id": "funding-grant",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-grant",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-grant",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-grant",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Assessment Configuration",
            "id": "all-questions",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-assess",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-assess",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-assess",
                "class": "ml-menu3"
              },
              {
                "title": "Proctoring",
                "id": "proctoring",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Currency",
            "id": "currency",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Passing Criteria",
            "id": "passing-criteria",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-criteria",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-criteria",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-criteria",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Discount",
            "id": "discount",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-discount",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-discount",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-discount",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Score Algorithm",
            "id": "score-algorithm",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-score",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-score",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-score",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Time Algorithm",
            "id": "time-algorithm",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-time",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-time",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-time",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Registration List",
            "id": "all-survey",
            // "id": "forms",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "FileSize Algorithm",
            "id": "fileSize-algorithm",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-fileSize",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-fileSize",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-fileSize",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Meeting Platform",
            "id": "meeting-platform",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-meeting-platform",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-meeting-platform",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-meeting-platform",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Scorm Kit",
            "id": "scorm-kit",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-scorm-kit",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-scorm-kit",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-scorm-kit",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Grade",
            "id": "grade",
            "class": "ml-menu",
           
          },
        ]
      },
      {
        "title": "Integration",
        "id": "student/settings/integration",
        "iconsrc": "settings_backup_restore",
        "class": "menu-toggle",
        "color": "#f4511e",
      "bgcolor": "#fbe9e7",
        "actions": [],
        "children": [
          {
            "title": "Third Party Integrations",
            "id": "3rd-party-integrations",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "SMTP",
            "id": "smtp",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
         
          {
            "title": "Payment Gateway",
            "id": "payment-gateway",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Social Logins",
            "id": "social-login",
            "class": "ml-menu",
            "actions": [],
            "children": []
          },
          {
            "title": "Virtual Meetings",
            "id": "virtual-meetings",
            "class": "ml-menu",
            "actions": [
              {
              "title": "Zoom",
              "id": "zoom",
              "class": "ml-menu3"
            },
            {
              "title": "Teams",
              "id": "teams",
              "class": "ml-menu3"
            },
          ],
            "children": []
          },
          {
            "title": "Thrid Party Logins",
            "id": "Thrid-party-logins",
            "class": "ml-menu",
            "actions": [
              {
              "title": "Singpass",
              "id": "singpass",
              "class": "ml-menu3"
            },
           
          ],
            "children": []
          },
          
        ]
      },
      {
        "title": "Security",
        "id": "student/settings/security",
        "iconsrc": "security",
        "class": "menu-toggle",
             "color": "#00897b",
      "bgcolor": "#e0f2f1",
        "actions": [],
        "children": [
          {
            "title": "2FA",
            "id": "2-factor-authentication",
            "class": "ml-menu",
            "actions": [],
            "children": []
          }
        ]
      },
      {
        "title": "Automation",
        "id": "student/settings/automation",
        "iconsrc": "grain",
        "class": "menu-toggle",
        "actions": [],
       "color": "#6d4c41",
      "bgcolor": "#efebe9",
        "children": [
          {
            "title": "Announcement",
            "id": "announcement",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-announce",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-announce",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-announce",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-announce",
                "class": "ml-menu3"
              }
            ],
            "children": []
          },
          {
            "title": "Approval Workflow",
            "id": "approval-workflow",
            "class": "ml-menu",
            "actions": [
              {
                "title": "Create",
                "id": "create-flow",
                "class": "ml-menu3"
              },
              {
                "title": "Edit",
                "id": "edit-flow",
                "class": "ml-menu3"
              },
              {
                "title": "View",
                "id": "view-flow",
                "class": "ml-menu3"
              },
              {
                "title": "Delete",
                "id": "delete-flow",
                "class": "ml-menu3"
              }
            ],
            "children": []
          }
        ]
      }
    ],
    
    
    "__v": 0,
    "name": "Side menu",
    
  }


]
MENU_ITEMS = [...SETTING_SIDEMENU_LIST];