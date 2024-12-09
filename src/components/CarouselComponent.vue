<template>
  <div class="col-span-12">
    <div ref="splideContainer" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="@/assets/images/banner.jpeg"
              alt="banner"
              class="rounded-3xl"
            />
          </li>
          <li class="splide__slide">
            <img
              src="@/assets/images/banner2.jpeg"
              alt="banner"
              class="rounded-3xl"
            />
          </li>
          <li class="splide__slide">
            <img
              src="@/assets/images/banner3.jpeg"
              alt="banner"
              class="rounded-3xl"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  // Default theme
  import "@splidejs/splide/css";

  // or only core styles
  import "@splidejs/splide/css/core";
  import { Splide } from "@splidejs/splide";

  export default defineComponent({
    name: "CarouselCompoenent",
    setup() {
      // const options = {};
      const splideContainer = ref<HTMLElement | null>(null);

      onMounted(() => {
        // Check if splideContainer is not null before initializing Splide
        if (splideContainer.value) {
          new Splide(splideContainer.value, {
            type: "loop",
            padding: "25rem",
            gap: "2rem",
            arrows: false,
          }).mount();
        } else {
          console.error("Splide container is not defined");
        }
      });
      return {
        splideContainer,
      };
    },
  });
</script>

<style scoped>
  .splide {
    padding: 0;
    margin: 0;
  }
</style>
