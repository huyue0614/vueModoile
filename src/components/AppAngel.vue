<template>
  <div>
     <span>{{title}}</span>
     <span v-text="title"></span>
     <span v-html="title"></span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: '呵呵哒'
    }
  }
}
</script>

<style scoped lang="less">

</style>
