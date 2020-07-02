<!--  -->
<template>
  <div>
    <div class="head">head<router-link to="/login">Back to Login</router-link>
    </div>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view />
  </div>

</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  //方法调用（里面编写方法）
  methods() {},

  //监听
  watch() {},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
