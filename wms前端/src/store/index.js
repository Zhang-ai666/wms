import vue from 'vue'
import Vuex from 'vuex'
import router,{resetRouter} from '../router'
import createPersistedState from 'vuex-persistedstate'

vue.use(Vuex)

function addNewRoute(menuList){
    console.log("menuList========="+menuList);
    console.log(menuList);
    let routes = router.options.routes
    // 循环路由
    routes.forEach(routeItem=>{
        if(routeItem.path=="/index"){
            // 循环数据 
            menuList.forEach(menu=>{
                let childRoute = {     
                    path:'/'+menu.menuClick,
                    name:menu.menuName,
                    meta:{
                        title:menu.menuName,
                    },
                    component:()=>import('../components/'+menu.menuComponent),
                }
                //添加子路由
                routeItem.children.push(childRoute)
            })
        }
    })
    //原有路由会重复
    //添加路由之前调用路由清空方法
    resetRouter()
    router.addRoutes(routes)
}


export default new Vuex.Store({
    //数据，相当于data
    state: {
      menu:[]
    },
    getters: {
      getMenu(state){
        return state.menu
      }
    },
    //里面定义方法，操作state方发
    mutations: {
      setMenu(state,menuList){
        state.menu = menuList

        addNewRoute(menuList)
      }
    },
    // 操作异步操作mutation
    actions: {
      
    },
    modules: {

    },
    //解决刷新动态路由丢失问题  存储menu
    plugins:[createPersistedState()]
  })