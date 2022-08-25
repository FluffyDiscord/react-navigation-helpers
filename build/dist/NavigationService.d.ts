interface RefObject<T> {
    current: T | null;
}
export declare type NavigationEvent = "transitionStart" | "transitionEnd" | "gestureStart" | "gestureEnd" | "gestureCancel" | string;
export declare const addNavigationListener: (event: NavigationEvent, callback: any) => (() => void);
export declare const isReadyRef: RefObject<boolean>;
export declare const navigationRef: any;
export declare const navigationListenerProps: {
    onTransitionEnd: (props: any, ...args: any[]) => void;
    onTransitionStart: (props: any, ...args: any[]) => void;
    onGestureStart: (props: any, ...args: any[]) => void;
    onGestureEnd: (props: any, ...args: any[]) => void;
    onGestureCancel: (props: any, ...args: any[]) => void;
};
export declare const navigate: (routeName: string, params?: any) => void;
export declare const push: (routeName: string, params?: any) => void;
export declare const goBack: () => void;
export declare const pop: (...args: any) => void;
export declare const popToTop: () => void;
export declare const reset: (params: any) => void;
export {};
