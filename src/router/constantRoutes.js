import Layout from '/@/layout/index.vue'
import HomeLayout from '/@/layout/homeLayout.vue'

import {useStore} from 'vuex'


const constantRoutes = [
    { 
        path: '/:pathMatch(.*)*',
        component: () => import('/@/views/404/index.vue'),
        name: 'NotFound'
    },
    {
        path: '/',
        component: HomeLayout,
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
    {
        path: '/Page',
        component: Layout,
        children: [
            {
                path: ':id',
                component: () => import('/@/views/page/index.vue'),
                name: 'Page',
                meta: { affix: true },
                props: route => {
                    return {
                        id: route.params.id
                    }
                },
            },
            // {
            //     path: 'next',
            //     component: () => import('/@/views/page/index.vue'),
            //     name: 'PageNext',
            //     props: (route, router) => {
            //         console.log(route, router)
            //         const store = useStore()
            //         const currentPageNumber = store.getters['page/currentPageNumber']
            //         console.log(currentPageNumber)
            //         return {
            //             id: currentPageNumber + 1
            //         }
            //     },
            //     meta: { affix: true },
            // },
            
        ]
    },
];

export default constantRoutes;


