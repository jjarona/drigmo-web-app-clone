<template>
    <button @click="shareProfile">
      Share Profile
    </button>
</template>
  
<script>
  export default {
    name: 'ShareProfileButton',
    methods: {
      shareProfile() {
        // Implement share logic. For example, using Web Share API or other services.
        console.log("Sharing profile...");  // Placeholder logic
      }
    }
  }
</script>
  
  
<style scoped>
    .share-profile-button {
        border: 1px solid;
        border-color: var (--aqua-island);
        border-radius: 33px;
        cursor: pointer;
        display: flex;
        height: 58px;
        transition: all 0.2s ease;
        width: 92px;
    }

    .share-profile-button:hover {
        transform: scale(1.1);
    }

</style>