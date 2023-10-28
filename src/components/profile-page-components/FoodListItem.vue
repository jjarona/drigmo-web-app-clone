<!-- FoodListItem.vue -->
<template>
    <div class="food-list-item">
      <PostItem :post="foodPost" />
      <!-- Other properties and components related to FoodListItem can go here -->
    </div>
</template>
  
  <script>
  import PostItem from './PostItem.vue';
  
  export default {
    components: {
      PostItem
    },
    props: {
      foodPost: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  