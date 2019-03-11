import Home from './components/Home.vue';
import Header from './components/Header.vue';
/*import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';*/

// 需要注意，没有加'user'参数，则把js给各个拆分加载，如果加了'user'，则都会集成在目标的模块中
const User=resolve=>{
  require.ensure(['./components/user/User.vue'],()=>{
    resolve(require('./components/user/User.vue'));
  },'user')
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'],()=>{
    resolve(require('./components/user/UserStart.vue'));
  },'user');
}


const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'],()=>{
    resolve(require('./components/user/UserEdit.vue'));
  },'user');
}


const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'],()=>{
    resolve(require('./components/user/UserDetail.vue'));
  },'user');
}


//设置静态路由表
export const routes = [
  //分配地址
  { path:'/',components:{
      default:Home,
      'header-top':Header
      // ,'header-bottom':Header
      // 如果加上header-bottom，那就上下都会有显示头部
    },name:'home' },
  //设置嵌套路由
  { path:'/user',components:{
      default:User,
      'header-bottom':Header
    } ,children:[
      {path:'',component:UserStart},
      {path:':id',component:UserDetail,beforeEnter:(to,from,next)=>{
          console.log('inside route setup');
          next();
        }},
      {path:':id/edit',component:UserEdit,name:'userEdit'}
    ]},{
      path:'/redirect-me',redirect:'/user' //地址为/redirect-me将直接转到/user地址下
    },
    {
      path:'/redirect-you',redirect:{name:'home'} //地址为redirect-you将直接转到/home地址下
    },
    {
      path:'*',redirect:'/' //所有不符合地址规范的都将转到/地址下
    }
];
