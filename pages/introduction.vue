<template>

  <div class="container-fluid d-flex flex-column ">
    
    <transition name="fade">
      <div v-show="show" @click="show = false" class="modal-overlay"></div>
    </transition>
    <transition name="translate">
      <div v-show="showsententes" class="sentenses position-absolute">
        <button
        class="position-absolute btn btn-danger"
          @click=";(showsententes = false), (show = false)"
          
        >
          بستن
        </button>
        <Sententes />
      </div>
    </transition>
    <transition name="translate">
      <div v-show="showother" class="sentenses position-absolute">
        <button
         class="position-absolute btn btn-danger"
          @click=";(showother = false), (show = false)"
         
        >
          بستن
        </button>
        <Otherbook />
      </div>
    </transition>
    <transition name="translate">
      <div v-show="showsimmiler" class="sentenses position-absolute">
        <button
          @click=";(showsimmiler = false), (show = false)"
          class="position-absolute btn btn-danger"
        >
          بستن
        </button>
        <Simmiler />
      </div>
    </transition>
    <transition name="translate">
      <div v-show="showsubject" class="sentenses position-absolute">
        <button
          @click=";(showsubject = false), (show = false)"
          class="position-absolute btn btn-danger"
        >
          بستن
        </button>
        <Subject />
      </div>
    </transition>
    <transition name="translate">
      <div v-show="shownegetive" class="sentenses position-absolute">
        <button
          @click=";(shownegetive = false), (show = false)"
          class="position-absolute btn btn-danger"
        >
          بستن
        </button>
        <Negetiv />
      </div>
    </transition>
    <div class="row">
      <div class="col-10 d-flex">
        <div class="col-3 d-flex">
          <div class="img w-50 h-50 mx-auto my-auto">
            <img class="img-fluid" src="../assets/img/mainpage.jpeg" alt="" />
          </div>
        </div>
        <div class="col-9">
          <div class="row">
            <div
              class="
                col
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
            >
              <div class="title mt-5 position-relative p-1">
                <h4>نویسنده:آلن دوباتن</h4>
                <div class="background-overlayhead position-absolute"></div>
              </div>
              <div class="text mt-4 mb-4 p-3 position-relative">
                <div class="background-overlay position-absolute"></div>
                <p class="text-right font-weight-bold p-1">
                  تسلی‌ بخشی‌ های‌ فلسفه‌ یکی‌ از آخرین‌ آثار آلن‌ دوباتن‌ است‌
                  که‌ تاکنون‌ بیش‌ از دویست‌ هزار نسخه‌ از آن‌ در سراسر جهان‌
                  به‌ فروش‌ رفته‌ است‌. با خواندن‌ این‌ کتاب‌ از سقراط‌
                  می‌آموزیم‌ که‌ عدم‌ محبوبیت‌ را نادیده‌ انگاریم‌. اپیکور بی‌
                  پولی‌ ما را چاره‌ می‌کند. سنکا به‌ ما کمک‌ می‌کند تا بر احساس‌
                  یأس‌ و ناامیدی‌ غلبه‌ کنیم‌. مونتنی‌ راهنمای‌ مناسبی‌ برای‌
                  درمان‌ ناکارآیی‌های‌ ماست‌. عشاق دلشکسته‌ می‌توانند با خواندن‌
                  آثار شوپنهاور تسلی‌خاطر یابند. کسانی‌ که‌ در زندگی‌ با
                  سختی‌های‌ زیادی‌ روبرو هستند با نیچه‌ همذات‌پنداری‌ خواهند
                  کرد.
                </p>
              </div>
              <!-- <div class="voice">
                <figure>
                  <figcaption>Listen to the T-Rex:</figcaption>
                  <audio controls src="../assets/voice/2.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
                <span>
                  <a href="../assets/voice/2.mp3" download
                    >فایل صوتی معرفی کتاب</a
                  ></span
                >
              </div> -->
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <div class="row d-flex justify-content-around">
                <div
                  @mouseenter=";(shownegetive = true), (show = true)"
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                  "
                >
                  نکات منفی کتاب
                </div>
                <div
                  @mouseenter=";(showsententes = true), (show = true)"
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                  "
                >
                  جملات مهم کتاب
                </div>
                <div
                  @click=";(showsubject = true), (show = true)"
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                  "
                >
                  فهرست کتاب
                </div>
              </div>
              <div class="row mt-4 d-flex justify-content-around">
                <div
                  @click=";(showsimmiler = true), (show = true)"
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                  "
                >
                  کتاب های مشابه
                </div>
                <div
                  @click=";(showother = true), (show = true)"
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                    text-center
                  "
                >
                  کتاب های دیگر نویسنده
                </div>
                <div
                  class="
                    part
                    d-flex
                    col-2
                    align-items-center
                    justify-content-center
                  "
                >
                  فایل صوتی معرفی کتاب
                </div>
              </div>
              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showsententes: false,
      showsubject: false,
      shownegetive: false,
      showsimmiler: false,
      showother: false,
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.translate-enter-active,
.translate-leave-active {
  transition: transform 0.5s;
}
.translate-enter, .translate-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-1000px);
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 99;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.sentenses {
  z-index: 999;
  top: 15%;
  left: 35%;
  transition: 500ms;
}
.background-overlay {
  left: 0;
  top: 0;
  background-color: #e97bb7;
  width: 99%;
  height: 100%;
  opacity: 0.3;
  border-radius: 3px;
}
.background-overlayhead {
  left: -4%;
  top: 2%;
  background-color: #33d677;
  width: 110%;
  height: 110%;
  opacity: 0.3;
  border-radius: 3px;
  padding: 2px;
}
.part {
  border: 1px solid white;

  height: 110px;
  border-radius: 10px;
  background: #6fa1c9;
  color: #ecc926;
  cursor: pointer;
  font-weight: bold;
}
button {
  right: 0;
  padding: 5px;
}
</style>