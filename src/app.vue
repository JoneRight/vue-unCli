<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      app: '我是Head',
    }
  },
  methods: {
    toFoo() {
      this.$router.push('foo')
    },
  },
}
</script>

<style>
.app {
  color: red;
}
</style>
