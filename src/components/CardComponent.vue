<template>
  <a
    :href="pageUrl"
    class="group relative block overflow-hidden rounded-2xl bg-gray-600 hover:shadow-2xl hover:ring-2 hover:ring-gray-700 hover:ring-offset-2 transition duration-300"
  >
    <img
      :src="imageSrc"
      alt="Game Image"
      class="aspect-[4/6] object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div
      class="absolute inset-x-0 bottom-0 z-10 bg-gray-500/50 group-hover:bg-gray-500/75 flex flex-col px-3 pb-3 transition-transform transform group-hover:translate-y-[-10%]"
    >
      <h2
        class="truncate text-sm font-semibold text-white sm:text-base group-hover:text-white px-2 py-1 rounded-md transition duration-300"
      >
        {{ title }}
      </h2>
      <p
        class="truncate text-xs text-white group-hover:text-white px-2 py-1 rounded-md transition duration-300"
      >
        {{ description }}
      </p>
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
    ></div>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardComponent",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
      pageUrl: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        default: "Game Image",
      },
    },
  });
</script>
