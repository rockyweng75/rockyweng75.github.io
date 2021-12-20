import { createRouter, createWebHistory } from "vue-router"
import constantRoutes from "./constantRoutes"

const base = import.meta.env.VITE_BASE
const router = createRouter({
    history: createWebHistory(base),
    // history: createWebHistory('/eForm_Web'),
    routes: constantRoutes
})

export default router
