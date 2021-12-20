import Layout from '/@/layout/index.vue'

const constantRoutes = [
    { 
        path: '/:pathMatch(.*)*',
        component: () => import('/@/views/404/index.vue'),
        name: 'NotFound'
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('/@/views/home/index.vue'),
                name: 'Home',
                meta: { title: '首頁', icon: 'el-icon-house', affix: true },
            },
            
        ]
    },
];

export default constantRoutes;


