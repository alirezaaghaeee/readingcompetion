
<template>
  <div class="container-fluid d-flex flex-column">
    
    <div class="row">
      <div class="col-10 d-flex">
        <div class="col-3 d-flex ">
          <div class="img  mx-auto my-auto ">
            <img class="img-fluid " src="../assets/img/mainpage.jpeg" alt="" />
          </div>
        </div>

        <div dir="rtl" class="col-9  ">
          <div class="title row">
            <h4 class="title mt-5 text-success mx-auto ">
                نظرات خود در مورد کتاب را در این قسمت بنویسید...
              </h4>
          </div>
          <div dir="rtl row d-flex align-items-center " >
            <ul class="d-flex flex-column col-10 mx-auto  ">
            <li   v-for="(comment, index) in comments"
              :key="index" class="row ">
              <p class="text-right d-flex " id="user_comment">{{ comment.text }}</p>
              <h5 class="col-2 text-center " id="user_name">{{ comment.user }}</h5>
            </li>
             
            </ul>
          </div>
          <div class="row">
            <div
              dir="rtl"
              class="
                col
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
            >
              
              <div class="text mt-4 p-3 w-75">
                <form>
                  <div >
                  
                    <textarea
                      v-model="usercomment.text"
                      required
                      class="form-control status-box p-2"
                      rows="3"
                      placeholder="نظر خود را وارد کنید..."
                    ></textarea>
                      <input
                      required
                      class="mt-2 border-info p-1 "
                      v-model="usercomment.user"
                      type="text"
                      placeholder="نام خود را وارد کنید..."
                    />
                  </div>
                </form>
                <div dir="rtl" class="button-group pull-right text-right">
                  <p class="counter">250</p>
                  <button
                    
                    class="btn btn-primary mx-auto"
                    @click="addcomment"
                    
                    >ثبت نظر</button
                  >
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import { mapState   } from 'vuex'


export default {
  data() {
    return {
      usercomment: {
        user: '',
        text: '',
      },
    }
  },
  computed: {
    ...mapState(['comments']),
  },
  methods: {
    addcomment(){
      this.$store.commit('addcomment',this.usercomment)
    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}

#post_form {
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
}

label {
  font-size: 18px;
}
input{
  border: 0;
  border-radius: 4px;
}
input:focus{
  border: 0;
  outline: none;
}
#counter {
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 15px;
  border-bottom: 2px solid rgb(0, 90, 125);
}

#id,
#user_name,
#date,
#user_comment {
  padding: 0.5em;
  font-size: 18px;
  font-weight: bold;
}

#id,
#date {
  background-color: rgb(0, 90, 125);
  color: white;
}

#user_name {
  background-color: white;
  color: rgb(0, 90, 125);
  margin-right: 83%;
}

#user_name {
  border-top: 1px solid rgb(0, 90, 125);
  border-bottom: 1px solid rgb(0, 90, 125);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  
}

#user_comment {
  border: 1px solid rgb(0, 90, 125);
  background-color: rgb(255, 247, 140);
  margin-bottom: 10px;
  
}

.img img{
  position: fixed;
  width: 200px;
  height: 300px;
  top: 25%;
  left: 5%;
}

@media screen and (min-width: 590px) {
  #comments,
  #post_form {
    margin-left: 25%;
    width: 50%;
  }
}
</style>