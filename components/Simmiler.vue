<template>
  <div dir="rtl">
      
    <ul class="list d-flex flex-column align-items-right text-right
      ">
      <li>
        چگونه در این دنیای مزخرف انسان بمانیم
      </li>
      <li>
        تاملات مارکوس اورلیوس
      </li>
      <li>
         آنچه سقراط به ما می آموزد
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
        }
    }
}
</script>

<style  scoped>
.list{
    height: 250px;
    overflow-y: scroll;
    width: 450px;
    z-index: 999;
    background-color: #FFFFFF;
    color: #808080;
    padding: 50px;
    border-radius: 10px;
    font-weight: 400;
    line-height: 28px;
}
li{
    margin-bottom: 20px;
    border-bottom: 1px solid black;

}

li:last-of-type{
border-bottom: 1px solid white;
}

</style>