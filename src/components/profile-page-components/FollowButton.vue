<template>
    <button @click="toggleFollow" :class="{ 'following': isFollowing }">
      {{ isFollowing ? 'Unfollow' : 'Follow' }}
    </button>
</template>
  
<script>
  export default {
    name: 'FollowButton',
    data() {
      return {
        isFollowing: false  // Example state (can be fetched from backend)
      }
    },
    methods: {
      toggleFollow() {
        this.isFollowing = !this.isFollowing;
        // Add logic to communicate with the backend here
      }
    }
  }
</script>
  
<style scoped>
  button {
    /* Basic styling. Add more as needed. */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button.following {
    background-color: #333;  /* Example when following */
    color: #fff;
  }
</style>
  