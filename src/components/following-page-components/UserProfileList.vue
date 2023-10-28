<!-- UserProfileList.vue -->
<template>
    <div class="profile-list">
      <UserProfileCard v-for="user in users" :key="user.id" :user="user" />
    </div>
</template>
  
  <script>
  import UserProfileCard from "@/components/UserProfileCard.vue";
  
  export default {
    name: "UserProfileList",
    components: {
      UserProfileCard
    },
    props: {
      users: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  
  <style>
  /* some CSS styles for profile list */
  </style>
  