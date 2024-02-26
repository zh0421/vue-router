<template>
  <div class="contain">
    <h3>热门推荐</h3>
    <div class="home">
        <img src="../assets/home/1.png" alt="">
        <img src="../assets/home/2.png" alt="">
        <img src="../assets/home/3.png" alt="">
        <img src="../assets/home/4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contain{
  width: 800px;
  margin: 0 auto;
}
.home{
  display: flex;
  justify-content: space-around;
}
.home img{
  width: 140px;
  height: 200px;
}
 


</style>