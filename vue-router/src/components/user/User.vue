<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <router-view></router-view>
      <br>
      <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
    </div>

</template>
<script>
  export default{
    /*data(){
      return{
        id:this.$route.params.id //$route
      }
    },*/
    /*watch:{
      '$route'(to,from){
        this.id=to.params.id;
      }
    },*/
    methods:{
      navigateToHome(){
        this.$router.push({path:'/'}); //$router
      }
    }
  }
  //1.$route -->当前这一个路由对象(单数)
  //2.$router -->整个路由数组对象（复数）
</script>
