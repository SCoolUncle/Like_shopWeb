<template>
  <div class="box">
    <div class="head_box">
      <label>
        <input type="file" @change="upfile" />
        <img :src="headinfo" alt />
      </label>
    </div>
    <div class="info">
      <p>{{info.nickname}}</p>
      <p>{{info.address}}</p>
    </div>
    <div class="menulist">
      <Menulist class="info_box" :title="'联系人'" :content="info.addressee" />
      <Menulist class="info_box" :title="'联系电话'" :content="info.phone" />
      <Menulist class="info_box" :title="'联系地址'" :content="info.address" />
      <Loginout text="退出" class="login_out" @btnfn="loginOut" />
    </div>
  </div>
</template>
<script>
import Menulist from "../components/Menulist/Menulist";
import { getc, setc } from "../assets/js/cookies.js";
import Loginout from "../components/Button/Button";
export default {
  components: {
    Menulist,
    Loginout
  },
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getpersonal();
  },

  computed: {
    //对图片地址进行过虑，去掉前边的..
    headinfo() {
      if (this.info.headPortrait) {
        let newarr = this.info.headPortrait.split("").slice(2);
        return newarr.join("");
      }
    }
  },
  methods: {
    getpersonal() {
      let cookieinfo = getc();
      console.log(cookieinfo);
      if (cookieinfo.user) {
        this.$axios({
          url: "http://127.0.0.1/vuephp/php/getHead.php",
          method: "POST",
          data: "userName=" + cookieinfo.user,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(res => {
          console.log(res);
          if (res.data[0].username) {
            this.info = res.data[0];
          } else {
            alert("cookie数据异常");
          }
        });
      } else {
        this.$router.replace("/login");
      }
    },

    upfile() {},

    loginOut() {
      setc("user", "", -1, "/");
      this.$router.replace("/login");
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
.box .head_box {
  height: 100px;
  background: #ffbf49;
  background-size: cover;
  /* border-bottom: 2px #ff804c solid; */
  border-radius: 0px 0px 5px 5px;
  position: relative;
}
.box .head_box label {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: #fff;
  border: 1px #ffbf49 solid;
  border-radius: 50%;
  overflow: hidden;
}
.box .head_box label input {
  display: none;
}
.box .head_box label img {
  display: block;
  height: 100%;
  width: 100%;
}
.box .info {
  padding-top: 50px;
  padding-bottom: 10px;
  background: #fff;
}
.box .info p {
  font-size: 24px;
  color: #000;
  text-align: center;
}
.box .info p:nth-of-type(2) {
  font-size: 16px;
  color: #ccc;
}
.box .menulist {
  background: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
}
.box .menulist .info_box {
  margin-top: 5px;
  padding: 0px 16px;
  height: 44px;
  border-bottom: 1px #e5e5e5 solid;
  box-sizing: border-box;
}
.box .menulist .login_out {
  height: 40px;
}
</style>
