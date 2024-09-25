<template>
  <div>
    <teamComponents
      v-for="(item, index) in profile"
      :key="index"
      :user="item.userName"
      :url="item.url"
      :img="item.img" >
    </teamComponents>
    <Member
      v-for="(item, index) in profile"
      :key="index"
      :user="item.userName"
      :img="item.img" >
    </Member>
  </div>
</template>
<script>
import Member from "./Member.vue";
import teamComponents from "./teamComponents.vue";
export default {
  components: {
    teamComponents,
    Member,
  },
  data() {
    return {
      profile: [
        {
          userName: "Joseph Brown",
          url: "joseph-brown",
          img: "https://images.pexels.com/photos/28186197/pexels-photo-28186197/free-photo-of-a-woman-with-an-umbrella-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
    };
  },
};
</script>