<template>
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our <span>Services</span></h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div class="row">
          <cardService
            v-for="(item, index) in card"
            :key="index"
            :img="item.img"
            :title="item.title"
            :des="item.des"
            button="READ MORE"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import cardService from "./cardService.vue";
export default {
  components: {
    cardService,
  },
  data() {
    return {
      card: [
        {
          img: "/src/assets/images/s1.png",
          title: "currency wallet",
          des: "fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using",
        },
        {
          img: "/src/assets/images/s2.png",
          title: "security storage",
          des: "fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using",
        },
        {
          img: "/src/assets/images/s3.png",
          title: "Expert Support",
          des: "fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using",
        },
      ],
    };
  },
};
</script>