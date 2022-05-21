export const routes = [
    {
        path: '/',
        component: 'lit-app',
        animate: true,
        children: [
            {
                path: 'explore',
                component: 'lit-login',
                action: async () => {
                    await import('./Login');
                },
            },
            {
                path: 'home',
                component: 'lit-signup',
                action: async () => {
                    await import('./Signup');
                },
            },
            {
                path: 'profile',
                component: 'lit-profile',
                action: async () => {
                    await import('./Profile');
                },
                children: [
                    {
                        path: '/security',
                        component: 'lit-security',
                        action: async () => {
                            await import('./Security');
                        }
                    }
                ]
            },
        ]
    },
];
