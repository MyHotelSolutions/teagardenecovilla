import { navigateTo } from "#app"

export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path != '/contactus/thanks'){
        return
    }

    if(to.path == '/contactus/thanks' && from.path == '/contactus' && process.client){
        return
    }else if(to.path == '/contactus/thanks' && from.path != '/contactus' && process.client){
        return navigateTo('/')
    }else if(to.params == '/contactus/thanks' && process.server){
        return navigateTo('/')
    }
})
