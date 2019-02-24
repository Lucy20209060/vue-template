<template>
  <div class="index">
    <i class="iconfont icon-web_set">{{msg}}</i>
  </div>
</template>

<script>
import { test } from '@/assets/utils/tools';
export default {
  name: 'Index',
  data () {
    return {
      msg: '首页'
    }
  },
  mounted(){
		console.log(test())
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index{
    font-size: 20px;
    i{
      font-family: 'nomal';
    }
  }
</style>
