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
          autoplay:true,
          pagination :{
            el:'.swiper-pagination',
            hideOnClick :true,
            clickable :true,
          },
          observeParents:true,
          setWrapperSize :true,
        },
      }
    }
  }
</script>

<style scoped>
     img{width: 100%;}
</style>

