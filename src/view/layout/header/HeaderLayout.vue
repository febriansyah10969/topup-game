<template>
  <nav class="bg-zinc-800 p-4 fixed w-full top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="text-white text-xl font-bold">
        <img
          src="@/assets/images/avalanche-store.png"
          width="200px"
          alt=""
          srcset=""
        />
      </a>

      <!-- Hamburger Menu (Mobile) -->
      <button
        id="menu-toggle"
        class="block lg:hidden text-white focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Navbar Links (Desktop) -->
      <div
        id="menu"
        class="hidden lg:flex lg:items-center lg:space-x-4 lg:w-auto"
      >
        <a
          href="#"
          class="block text-white py-2 px-4 border-b-2 hover:border-b-2"
          >Beranda</a
        >
        <a href="#" class="block text-white py-2 px-4 hover:border-b-2"
          >Cek Transaksi</a
        >
      </div>
    </div>

    <!-- Mobile Sidebar Menu -->
    <div
      id="mobile-menu"
      class="fixed top-0 right-0 w-96 h-full bg-zinc-900 transform translate-x-full transition-transform duration-300 lg:hidden"
    >
      <div class="flex justify-start p-4">
        <button id="close-menu" class="text-white">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col items-start">
        <li><a href="#" class="block text-white py-2 px-4">Home</a></li>
        <li><a href="#" class="block text-white py-2 px-4">About</a></li>
        <li><a href="#" class="block text-white py-2 px-4">Services</a></li>
        <li><a href="#" class="block text-white py-2 px-4">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from "vue";

  export default defineComponent({
    name: "HeaderLayout",
    setup() {
      onMounted(() => {
        // new Splide(".splide").mount();

        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenu = document.getElementById("close-menu");

        if (menuToggle && mobileMenu && closeMenu) {
          menuToggle.addEventListener("click", () => {
            mobileMenu.style.transform = "translateX(0)";
          });

          closeMenu.addEventListener("click", () => {
            mobileMenu.style.transform = "translateX(100%)";
          });
        }
      });
    },
  });
</script>
