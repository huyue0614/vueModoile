<template>
  <div class="tabs">
    <ul>
      <router-link :to="{name:'AppHome'}" tag="li" exact>
         <div>
           <img src="../assets/images/my@2x.png" alt="">
         </div>
        <div class="font">我的</div>
      </router-link>
      <router-link :to="{name:'AppAngel'}" tag="li" >
        <div>
          <img src="../assets/images/tianshi@2x.png" alt="">
        </div>
        <div class="font">我的天使币</div>
      </router-link>
      <router-link :to="{name:'AppBalance'}" tag="li" >
        <div>
          <img src="../assets/images/yue@2x.png" alt="">
        </div>
        <div class="font">我的余额</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabs'
}
</script>

<style scoped lang="less">
  .tabs{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
      ul{
        list-style: none;
        height: 100px;
        background: #2c2b2b;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            width:40px;
          }
          img:last-child{
            width: 35px;
          }
          .font{
            color: #fff;
            font-size:24px;
          }
        }
      }
    }

</style>
