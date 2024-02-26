<template>

  <div id="root">
    <div class="header">
      <router-link to="/home">主页</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友圈</router-link>
    </div>
    <!-- 路由匹配的组件的显示位置，必须要有 -->
  <router-view></router-view>
  </div>
</template>

<script>

export default {
 
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header a {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  background-color: #242424;
  color: #fff;
}
.main {
  width: 800px;
  margin: 0 auto;
}
</style>