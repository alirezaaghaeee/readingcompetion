
        <template>
  <div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-5 d-flex justify-content-between  bg-dark p-2 ">
        <h3 @click="login=true,signup=false" class="btn   btn-outline-danger my-auto">ورود</h3>
        <h3 @click="login=false,signup=true" class="btn  btn-outline-danger  my-auto">ثبت نام</h3>

      </div>
    </div>
    <div class="row ">
      <div v-show="login" class="col-4 text-right mx-auto"><Login/></div>
      <div v-show="signup" class="col-4 text-right mx-auto"><Signup/></div>
    </div>
  </div>
</template>
    

<script>
export default {
  data() {
    return {
      login: true,
      signup: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>