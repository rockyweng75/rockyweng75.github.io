import Layout from '/@/layout/index.vue'
import HomeLayout from '/@/layout/homeLayout.vue'

import { useStore } from 'vuex'

const store = useStore()
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
        ]
    },
    {
        path: '/Buy',
        component: Layout,
        children: [
            {
                path: ':id',
                component: () => import('/@/views/buy/index.vue'),
                name: 'buy',
                meta: { affix: true },
                // redirect: to =>{
                //     console.log('setitems', store)
                //     // console.log(useStore())
                //     // store.Commit('attack/setItems', ['肉鬆'])
                //     return '/page/3'
                // },
                // props:(route) =>{
                //     console.log('2setitems', route)

                // }
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
    {
        path: '/Cast',
        component: Layout,
        children: [
            {
                path: ':id',
                component: () => import('/@/views/cast/index.vue'),
                name: 'cast',
                meta: { affix: true },
            },      
        ]
    },
    {
        path: '/Attack',
        component: Layout,
        children: [
            {
                path: ':id',
                component: () => import('/@/views/attack/index.vue'),
                name: 'Attack',
                meta: { affix: true },
                props: route => {
                    return {
                        id: route.params.id
                    }
                },
            },
        ]
    },
    {
        path: '/Author',
        component: () => import('/@/views/author/index.vue'),
    },
    
];

export default constantRoutes;


