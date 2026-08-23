import { defineRouter } from '#q-app'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import routes from './routes'

export default defineRouter(function () {
  const isServer = typeof process !== 'undefined' && Boolean(process.env?.SERVER)
  const routerMode =
    (typeof process !== 'undefined' && process.env?.VUE_ROUTER_MODE) ||
    import.meta.env.VUE_ROUTER_MODE
  const routerBase =
    (typeof process !== 'undefined' && process.env?.VUE_ROUTER_BASE) ||
    import.meta.env.VUE_ROUTER_BASE

  const createHistory = isServer
    ? createMemoryHistory
    : routerMode === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(routerBase)
  })

  return Router
})
