<!-- UserProfileInfo.vue -->
<template>
  <div class="user-profile-info">
      <h1 class="name">{{ userName }}</h1>
      <p class="biography">{{ userBio }}</p>
  </div> 
</template>

<script>
export default {
  name: "UserProfileInfo",
  props: {
    userName: {
      type: String,
      required: true
    },
    userBio: {
      type: String,
      default: 'This user has no biography.'
    }
  }
};
</script>

<style>
  .user-profile-info {
    /* You can add styles specific to this component here */
  }
  .name {
    font-size: 24px;
    font-weight: bold;
  }
  .biography {
    font-size: 16px;
    color: #666;
  }
</style>
