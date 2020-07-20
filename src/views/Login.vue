<template>
  <div class="bk">
    <p class="title">欢迎登录!</p>
    <div class="login-box" id="loginBox">
      <div class="l-static">
        <div class="l-tab-covers">
          <div class="l-tab-list" :class="{active:flag}" @click="flag = !flag">密码登录</div>
          <div class="l-tab-list" :class="{active:!flag}" @click="flag = !flag">账号注册</div>
        </div>

        <div class="static-module">
          <!-- 登录 -->
          <div class="inform-box" v-show="flag">
            <p id="loginError" v-if="loginerror">{{error}}</p>
            <input type="text" placeholder="手机号码" id="username" autofocus v-model="lunval" />
            <input type="password" placeholder="密码" id="password" v-model="lpwdval" />
            <input type="button" value="登录" id="loginbtn" @click="login" />
            <div class="forget">
              <label>
                <input type="checkbox" class="autoCheck" />
                <a>下次自动登录</a>
              </label>
              <a href="javascript:forgetP();">忘记密码？</a>
            </div>
          </div>
          <!-- 注册 -->
          <div class="inform-box" v-show="!flag">
            <p id="regError" v-if="regerror">{{error}}</p>
            <input type="text" placeholder="请输入手机号" id="setname" v-model="runval" />
            <input
              type="password"
              placeholder="请输入一个不包含特殊符号的密码(6-10)"
              id="setpwd"
              v-model="rpwdval"
            />
            <input type="password" placeholder="确认密码" id="setpwds" v-model="rpwdvals" />
            <div class="sms">
              <input type="text" placeholder="验证码" id="sms" />
              <button id="smsbtn">获取验证码</button>
            </div>

            <input type="button" value="注册" id="regbtn" @click="reg" />
          </div>
          <p class="endtitle">我们为科技而生！</p>
        </div>
      </div>
    </div>
    <div class="bkcolor"></div>
    <div id="regtrue" v-show="regwindow">
      <div>
        <p>注册成功!</p>
      </div>
    </div>
  </div>
</template>
<script>
// import Button from "../components/Button/Button";
export default {
  components: {
    // Button
  },
  data() {
    return {
      flag: true,
      lunval: "",
      lpwdval: "",
      runval: "",
      rpwdval: "",
      rpwdvals: "",
      loginerror: false,
      regerror: false,
      error: "",
      regwindow:false
    };
  },
  methods: {
    login() {
      if (
        /^1[3-9][0-9]{9}$/.test(this.lunval) &&
        /[A-z0-9]{6,10}/.test(this.lpwdval)
      ) {
        this.loginerror = false;
        this.$axios({
          url: "http://127.0.0.1/vuephp/php/goods_login.php",
          method: "POST",
          data: "userName=" + this.lunval + "&userPwd=" + this.lpwdval,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(res => {
          if (res.data === 1) {
            this.$router.replace("/home");
            // 设置cookie值
            this.setcookie("user", this.lunval, 120, "/");
          } else {
            this.loginerror = true;
            this.lunval = this.lpwdval = "";
            this.error = "该账号还没有注册哦！";
          }
        });
      } else {
        this.error = "请检查账号和密码格式！";
        this.loginerror = true;
      }
    },
    reg() {
      if (
        /^1[3-9][0-9]{9}$/.test(this.runval) &&
        /[A-z0-9]{6,10}/.test(this.rpwdval) &&
        this.rpwdvals === this.rpwdval
      ) {
        this.regerror = false;
        this.$axios({
          url: "http://127.0.0.1/vuephp/php/goods_res.php",
          method: "POST",
          data: "userName=" + this.runval + "&userPwd=" + this.rpwdval,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(res => {
          if (res.data == 1) {
            this.regwindow = true,
            setTimeout(() => {
                this.regwindow = false
            }, 2000);
          } else {
            this.regerror = true;
            this.runval = this.rpwdval = this.rpwdvals ="";
            this.error = "该账号已被注册！";
          }
        });
      } else {
        this.error = "请检查账号和密码格式！";
        this.regerror = true;
      }
    },
    // 设置cookie
    setcookie(key, value, time, path) {
      let nowtime = new Date();
      let t = Date.now();
      t = t - 60 * 60 * 1000 * 8 + time * 1000;
      nowtime.setTime(t);
      let a = time ? nowtime : "";
      document.cookie = key + `=${value};expires=${a};path=${path}`;
    }
  }
};
</script>
<style scoped>
.clear:after {
  content: "";
  display: block;
  clear: both;
}

input {
  display: block;
}

.bk {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #00000050;
}
.bk .title {
  color: #00000050;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin: 50px 0px;
  letter-spacing: 5px;
}
.bkcolor {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: #ffffff;
  background-size: cover;
  z-index: -1;
}

#loginBox {
  width: 100%;
  margin: 0px auto;
  background: #fff;
  padding: 32px;
  border-radius: 4px;
  /* box-shadow: 0px 0px 4px 0px #00000050; */
  box-sizing: border-box;
}

#loginBox .l-static {
}

#loginBox .l-static .l-tab-covers {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 10px;
}

#loginBox .l-static .l-tab-covers .l-tab-list {
  color: #999;
  font-size: 16px;
  margin-right: 30px;
  padding-bottom: 15px;
  line-height: 24px;
  text-align: center;
  display: inline-block;
  letter-spacing: 1px;
}

#loginBox .l-static .l-tab-covers .active {
  color: #000;
  border-bottom: 2px solid #282828;
}
/* 信息填写模块 */
#loginBox .l-static .static-module {
  width: 100%;
  position: relative;
  height: 350px;
}

#loginBox .l-static .static-module .endtitle {
  width: 100%;
  position: absolute;
  bottom: 10px;
  text-align: center;
  color: #bbb;
  letter-spacing: 2px;
}

#loginBox .l-static .static-module .inform-box {
  width: 100%;
  position: absolute;
  top: 0px;
  /* display: block; */
}

#loginBox .l-static .static-module .inform-box p {
  height: 36px;
  line-height: 36px;
  padding: 0px 20px;
  font-size: 14px;
  border: 1px #eb4559 solid;
  background: #eb455920;
  border-radius: 4px;
  color: #333;
  /* display: none; */
}

#loginBox .l-static .static-module .inform-box input {
  height: 42px;
  width: 100%;
  padding: 0px 20px;
  font-size: 14px;
  line-height: 42px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  background: #f4f4f4;
  border-radius: 4px;
  outline: none;
  margin-top: 10px;
  letter-spacing: 2px;
  color: #333;
}

#loginBox .l-static .static-module .inform-box input::-ms-input-placeholder {
  color: #bbb;
}

#loginBox
  .l-static
  .static-module
  .inform-box
  input::-webkit-input-placeholder {
  color: #bbb;
}
#loginBox .l-static .static-module .inform-box .sms {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#loginBox .l-static .static-module .inform-box .sms input {
  flex: 1;
}
#loginBox .l-static .static-module .inform-box .sms button {
  display: block;
  flex-shrink: 0;
  border: 1px solid #ddd;
  background: #f4f4f4;
  height: 42px;
  box-sizing: border-box;
  width: 100px;
  margin-top: 10px;
  color: #bbb;
  margin-left: 20px;
  border-radius: 4px;
  background: #ff9e54;
  border: none;
  color: #fff;
}

#loginBox .l-static .static-module .inform-box .sms .active {
  background: #ff9600;
  border: none;
  color: #fff;
}

#loginBox .l-static .static-module .inform-box #loginbtn {
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  color: #bbb;
  background: #ff9e54;
  color: #fff !important;
}

#loginBox .l-static .static-module .inform-box #regbtn {
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  color: #bbb;
  background: #ff9e54;
  color: #fff !important;
}

#loginBox .l-static .static-module .inform-box .forget {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
}

#loginBox .l-static .static-module .inform-box .forget label input {
  margin: 0;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  display: inline-block;
}
#loginBox .l-static .static-module .inform-box .forget label span {
  font-size: 14px;
}

#loginBox .l-static .static-module .inform-box .forget a {
  font-size: 14px;
  line-height: 14px;
  text-decoration: none;
  color: #999;
}

/* 默认隐藏 */
#loginBox .l-static .static-module .active {
  display: block;
}

#loginBox .l-static .static-module .inform-box .active {
  background: #00bdaa;
  color: #fff !important;
}
/* 注册栏样式 */
#loginBox .l-static .static-module .inform-box #regbtn {
  margin-top: 20px;
}

#regtrue {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
}
#regtrue div {
  width: 300px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 200px;
}
#regtrue div p {
  text-align: center;
  font-size: 20px;
  color: #8cba51;
  line-height: 50px;
}
</style>