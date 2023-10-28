<!-- UserProfileCard.vue -->
<template>
    <div class="profile-card">
      <img :src="user.profileImage" alt="User Profile" />
      <h2>{{ user.name }}</h2>
      <p>{{ user.bio }}</p>
      <!-- Additional details and options like unfollow or send message -->
    </div>
  </template>
  <!-- UserProfileCard.vue -->
<template>
  <div class="profile-card">
    <img :src="user.avatar" :alt="`${user.name} Avatar`">
    <h2>{{ user.name }}</h2>
    <p>{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "UserProfileCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
/* some CSS styles for profile card */
</style>
