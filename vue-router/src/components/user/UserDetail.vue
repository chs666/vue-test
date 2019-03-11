<template>
    <div>
      <h3>Some User Details</h3>
      <p>User loaded has ID: {{$route.params.id}}</p>
      <!--<router-link
        tag="button"
        :to="'/user/' + $route.params.id + '/edit'"
        class="btn btn-primary"
      >Edit User</router-link>-->
      <!--<router-link tag="button" class="btn btn-primary" :to="{name:'userEdit',params:{ id: $route.params.id },query:{locale:'en',q:100}}">Edit User</router-link>-->
      <router-link tag="button" class="btn btn-primary" :to="link">Edit User</router-link>
    </div>

</template>
<script>
  export  default{
    data(){
      return {
        link:{
          name:'userEdit',
          params:{
            id: this.$route.params.id
          },
          query:{
            locale:'en',
            q:100
          },
          hash:'#data'
        }
      }
    },
    beforeRouteEnter(to,from,next){
      if(true){
        //查看false与true之间的区别效果，false的话detail页面将无法查看
        next()
      }else{
        next(false);
      }
    }
  }
</script>
