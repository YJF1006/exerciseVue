<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <img :src="slide" >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carousel',
    //接收父级传过来的属性（父传子）
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>
<style scoped>
    img{height: 100%;}
</style>

