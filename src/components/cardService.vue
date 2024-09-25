<template>
    
        <div class="col-md-4 ">
    <div class="box ">
              <div class="img-box">
                <img :src="img" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  {{ title }}
                </h5>
                <p>
                  {{ des }}
                </p>
                <a href="">
                  {{ button }}
                </a>
              </div>
            </div>
            </div>
          
</template>
<script>
export default {
    
    props: ['img', 'title', 'des', 'button']
}
</script>