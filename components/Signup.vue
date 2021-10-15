<template>
    <div class="vue-tempalte">
        <form>
            <h3>ثبت نام </h3>

            <div class="form-group">
                <label>اسم کامل</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>ایمیل</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>رمز عبور</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">ثبت نام</button>

            <p class="forgot-password text-right">
                قبلا ثبت نام کرده اید؟
            <span @click=""> ورود؟</span>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>