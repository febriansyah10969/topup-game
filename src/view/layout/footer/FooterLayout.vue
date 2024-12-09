<template>
  <footer class="bg-zinc-800 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Section 1: Logo and Description -->
        <div>
          <h3 class="text-xl font-bold">
            <img
              src="@/assets/images/avalanche-store.png"
              width="200px"
              alt=""
              srcset=""
            />
          </h3>
          <p class="mt-4 text-sm text-gray-400">
            Your go-to platform for amazing experiences. We bring the best
            services right at your fingertips.
          </p>
        </div>

        <!-- Section 2: Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Menu Cepat</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-white">Beranda</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white"
                >Check Transaksi</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white"
                >Hitung Zodiac</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white"
                >Customer Service</a
              >
            </li>
          </ul>
        </div>

        <!-- Section 3: Resources -->
        <div></div>

        <!-- Section 4: Newsletter Subscription -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Sosial Media</h4>
          <p class="text-sm text-gray-400 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form class="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-800 mt-10 pt-6 text-center">
        <p class="text-sm text-gray-400">
          &copy; 2024 Avalanche Store. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FooterLayout",
  });
</script>
