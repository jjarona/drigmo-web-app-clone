<template>
    <div class="post-item"> 
        <div class="posts-caption">
        <h1 class="caption inter-bold-black-30px">What to order at Heng Mui Keng Sushi</h1>
        <p class="description inter-light-black-30px">
        Why these sushi are a must-try when you visit this exquisite
        Japanese restaurant in the West
        </p> 
        </div>
        <img class="image-3-of-post" sro= "image-3-of-post-5.png" alt="Image 3 of Post" />
        <img class="image-2-of-post" src= "image-2-of-post -5.png" alt="Image 2 of Post" />
        <img class="image-1-of-post" src= "image-1-of-post -15.png" alt= "Image 1 of Post" /> 
    </div>

</template>
    
<script> //to be linked to Firebase 
export default {
  name: "PostItem",

  props: {
    caption: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      validator(images) {
        return images.length === 3; // expecting exactly 3 images for now
      }
    }
  }
};
</script>


<style>
    .post-item-container {
    cursor: pointer;
    height: 382px;
    position: relative;
    transition: all 0.2s ease ;
    width: 1300px;
    }

    .post-item-container :hover {
        transform: translate(0, -5px):
        box-shadow: Opx 12px 5px -8px Orgba(0, 0, 0, 0.2) ;
        .posts-caption {
        display: flex;
        flex-direction: column;
        gap: 18px;
        height: 87px;
        left: 3px;
        position: absolute;
        top: 295px;
        width: 1301px;
    
    }
    .caption {
        height: 38px;
        letter-spacing: 0; line-height: normal;
        width: 860px;
    }

    .description {
        height: 31px;
        letter-spacing: 0;
        line-height: normal; white-space: nowrap;
        width: 1297px;
    }

    .image-3-of-post {
        height: 278px;
        left: 443px;
        position: absolute;
        top: 1px;
        width: 420px;
    }
    
    .image-2-of-post {
        height: 278px;
        left: 0;
        position: absolute;
        top: 1px;
        width: 420px;
    }

    .image-1-of-post {
        height: 279px;
        left: 880px;
        position: absolute;
        top: 0;
        width: 420px;
    }
</style>