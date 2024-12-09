<template>
  <div class="container-fluid bg-zinc-900">
    <HeaderLayout />

    <!-- Main Content -->
    <router-view></router-view>

    <FooterLayout />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import HeaderLayout from "@/view/layout/header/HeaderLayout.vue";
  import FooterLayout from "@/view/layout/footer/FooterLayout.vue";

  export default defineComponent({
    name: "LayoutMaster",
    components: {
      HeaderLayout,
      FooterLayout,
    },
  });
</script>

<style scoped>
  .splide {
    padding: 0;
    margin: 0;
  }
</style>
