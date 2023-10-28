<template>
    <div class="food-lists-container">
      <FoodListItem v-for="(foodItem, index) in foodList" :key="index" :foodPost="foodItem" />
    </div>
</template>
  
  <script>
  import FoodListItem from './FoodListItem.vue';
  
  export default {
    components: {
      FoodListItem
    },
    data() {
      return {
        // Sample data. In a real scenario, this can be fetched from an API or received as props.
        foodList: [
          { title: 'Post 1', content: 'Content for post 1' },
          { title: 'Post 2', content: 'Content for post 2' },
          // ... more food posts
        ]
      };
    }
  };
  </script>
  