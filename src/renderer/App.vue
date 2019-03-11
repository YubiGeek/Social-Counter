<template>
  <div id="app" @dblclick="setFullScreen()">
    <router-view></router-view>
  </div>
</template>

<script>
  import electron from 'electron'
  var window = electron.remote.getCurrentWindow();

  export default {
    name: 'social-counter',
    methods: {
      setFullScreen () {
        window.setFullScreen(!window.isFullScreen())
      }
    }
  }
</script>

<style>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
