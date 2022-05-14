export const routes = [
    {
        path: '/',
        component: 'lit-app',
        children: [
            {
                path: 'login',
                component: 'lit-login',
                action: async () => {
                    await import('./Login');
                },
            },
            {
                path: 'signup',
                component: 'lit-signup',
                action: async () => {
                    await import('./Signup');
                },
            },
        ]
    },
];
