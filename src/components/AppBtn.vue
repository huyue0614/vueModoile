<template>
    <div class="btn">
      <button v-on:click="btn">点我呀</button>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: '随便吧，子组件传值给父组件'
    }
  },
  props: ['msg1'],
  methods: {
    btn: function () {
      console.log(this.msg1)
      this.$emit('tell-me', this.msg)
    }
  }
}
</script>

<style scoped>
  .btn{
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .btn button{
    width: 150px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: transparent;
    color: #fff;
  }
</style>
