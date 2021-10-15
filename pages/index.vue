<template>
  <div class="container-fluid "> 
    <div class="row d-flex mt-4   ">
      <div class="content d-flex flex-column align-items-center col-10  ">
        <h3>اولین دوره مسابقات کتابخوانی</h3>
        <h5 class="mb-2">کتاب این دوره تسلی بخش های فلسفه</h5>
        <div class="img position-relative  ">
          <img class="img-fluid frontpage h-75" src="../assets/img/mainpage.jpeg" alt="" />
          <img class="img-fluid position-absolute backpage " src="../assets/img/mainpage2.jpg" alt="" />
          <button class="btn btn-danger position-absolute button font-weight-bold text-dark "><nuxt-link to="/introduction" class="text-white">معرفی کامل</nuxt-link></button>
          
         
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.button{
  bottom: 200px;
  left: 45%;
  padding: 5PX!important;
  transition: 2s;
  opacity: 0;
  color: white;
}
.frontpage{
  transition: 700ms;
 
}
.backpage{
  transition: 500ms;
  opacity: 0;
  left: 0;
  
}
.backpage:hover{
  transition: 1s;
  opacity:1;
  transform: rotate(360deg) scale(110%);
}
.img:hover .button{
  opacity: 1;
}

</style>
