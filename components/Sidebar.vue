<template>
  <div class="d-flex justify-content-center flex-column h-100 main" >
    <div class="row m-2 ">
      <div  class="   col d-flex justify-content-end align-items-center justify-content-center">
        <nuxt-link   to="/">صفحه اصلی</nuxt-link>
      </div>
    </div>
    
    <div class="row m-2">
      <div  class="col d-flex justify-content-end align-items-center justify-content-center">
        <nuxt-link to="/introduction">معرفی کتاب این دوره</nuxt-link>
      </div>
    </div>
   
    <div class="row m-2 ">
      <div class="col d-flex justify-content-end align-items-center justify-content-center">
        <nuxt-link to="/comments">بخش نظرات</nuxt-link>
      </div>
    </div>
     <div class="row m-2 ">
      <div class="col d-flex justify-content-end align-items-center justify-content-center">
        <nuxt-link to="/logsign">ثبت نام در دوره</nuxt-link>
      </div>
    </div>
    <div class="row m-2 ">
      <div class="col d-flex justify-content-end align-items-center justify-content-center">
        <nuxt-link to="/test">آزمون</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  
  methods:{
    select(e){
   e.target.classList.add('select')
    }
  }
}


</script>

<style scoped>
* {
  text-decoration: none !important;
 color: white;
}
.main{
  background-image: url("../assets/img/sidebar1.jpg");
  
  
}
a{
  font-weight: 500;
  transition: 500ms;
  min-width: 120px;
  height: 40px;
  text-align: center;
  
 
}
a:hover{
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 5px;
  padding: 3px;
  
}

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: white;
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 5px;
  padding: 3px;
}
a:hover {
  color: white;
  font-weight: bolder;
}

</style>