<template>
  <div class="container">
    <!--头部-->
    <div class="header">
      <img src="../assets/images/moren.png" alt="">
      <span>爱自己。</span>
    </div>
    <!--奖励栏-->
    <ul class="integral">
      <li>
        <img src="../assets/images/tianshi@2x.png" alt="">
        <div>
          <span>金币</span>
          <span>100</span>
        </div>
      </li>
      <li>
        <img src="../assets/images/tianshi@2x.png" alt="">
        <div>
          <span>金币</span>
          <span>100</span>
        </div>
      </li>
      <li>
        <img src="../assets/images/tianshi@2x.png" alt="">
        <div>
          <span>金币</span>
          <span>100</span>
        </div>
      </li>
    </ul>
    <!--首页栏-->
    <ul class="menuBar">
      <router-link :to="{name:'AppAngel'}" tag="li" >
          <div>
            <img src="../assets/images/tianshi@2x.png" alt="">
          </div>
          <div>
            <span>我的余额</span>
          </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>我的订单</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>变美日记</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>精选热推</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>我的医美大使</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
    </ul>

    <ul class="menuBar">
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>我的资料</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div>
          <span>门店地址</span>
        </div>
        <img  src="../assets/images/youJian@2x.png" alt="">
      </router-link>
    </ul>
    <!--<h1>{{ msg }}</h1>-->
  </div>
</template>

<script>
export default {
  name: 'appHome',
  data () {
    return {
      msg: '这是一个测试的页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .container{
      margin: 0;
      height:calc(100vh - 100px);
      overflow: scroll;
      img{
        width: 45px;
      }
      /*头部样式*/
      .header{
        height: 430px;
        border-radius: 30px;
        margin: 20px;
        background: url("../assets/images/duihuan.jpg") no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
        position: relative;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50px;
          position: absolute;
          top: 30px;
          left: 30px;
        }
        span{
          color: #2b2b2b;
          font-size: 20px;
          position: absolute;
          right: 50px;
          bottom: 80px;
        }
      }
      /*奖励栏*/
      .integral{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li{
          span{
            font-size: 28px;
          }
          span:first-child{
            color: #454545;
          }
          span:last-child{
            color: #fff;
          }
        }
      }
      /*菜单栏*/
      .menuBar{
        margin: 30px;
        border-radius: 20px;
        background: rgba(44,44,43,.68);
        padding: 10px;
        li{
          min-height: 100px;
          display: flex;
          flex-direction: row;
          padding: 0 20px;
          align-items: center;
          div:nth-child(2){
            width: 550px;
            height: 100px;
            line-height: 100px;
            text-align: left;
            margin-left: 20px;
            border-bottom: 1px solid #444;
          }

          span{
            font-size: 30px;
            color: #fff;
          }
          >img{
            width: 15px;
            margin-left: 20px;
          }
        }
        li:last-child div:nth-child(2){
          border-bottom: 0;
        }
      }
    }
</style>
