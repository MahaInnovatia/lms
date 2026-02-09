declare module 'plyr' {
  export default class Plyr {
    constructor(target: Element | string, options?: any);
    destroy(): void;
    on(event: string, cb: (...args: any[]) => void): void;
    play(): Promise<void>;
    pause(): void;
    restart(): void;
    stop(): void;
    toggleControls(toggle?: boolean): void;
    [key: string]: any;
  }
}
