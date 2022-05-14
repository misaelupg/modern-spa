export declare const routes: {
    path: string;
    component: string;
    children: {
        path: string;
        component: string;
        action: () => Promise<void>;
    }[];
}[];
