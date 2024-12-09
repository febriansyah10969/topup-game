<template>
  <CarouselComponent class="pt-24 bg-zinc-800 pb-8" />
  <main>
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="wrapper text-white">
        <p class="text-xl font-bold">Daftar Game</p>
        <P class="text-sm">berikut adalah produk game di avalanche store!</P>

        <div class="my-8">
          <div
            class="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            <CardComponent
              title="Mobile Legends"
              description="Moonton"
              image-src="https://cdn.ourastore.com/cc355cc5-83f1-4691-aec1-b879f9c5c2a4.jpg"
              page-url="/id-id/mobile-legends"
            />

            <CardComponent
              title="Mobile Legends Paket Irit"
              description="Moonton"
              image-src="https://cdn.ourastore.com/5042279a-95ce-4acf-9df5-626554ee4d25.jpg"
              page-url="/id-id/mobile-legends-paket-irit"
            />

            <CardComponent
              title="PUBG Mobile"
              description="Tencent Games"
              image-src="https://client-cdn.bangjeff.com/b94ea08a-6890-4dfd-8073-7b8479722504.png"
              page-url="/id-id/pubg-mobile"
            />

            <CardComponent
              title="Free Fire"
              description="Garena"
              image-src="https://client-cdn.bangjeff.com/2b2b481e-89fe-474f-a27d-be791df405cb.jpg"
              page-url="/id-id/free-fire"
            />

            <CardComponent
              title="Free Fire MAX"
              description="Garena"
              image-src="https://client-cdn.bangjeff.com/eb2e29bd-78d5-41db-9712-f3e6c55d73a0.jpg"
              page-url="/id-id/free-fire-max"
            />

            <CardComponent
              title="Honor of Kings"
              description="Tencent Games"
              image-src="https://cdn.ourastore.com/3d715234-e5bd-4d95-9a20-9b7eb63a90d8.jpg"
              page-url="/id-id/honor-of-kings"
            />

            <CardComponent
              title="Age of Empire (Mobile)"
              description="Level Infinite"
              image-src="https://cdn.ourastore.com/ourastore.com/product/ageofempire-ezgif.com-optijpeg.jpg"
              page-url="/id-id/age-of-empire-mobile"
            />

            <CardComponent
              title="Point Blank"
              description="Zepetto"
              image-src="https://cdn.ourastore.com/2e96a9cd-a740-499e-a140-ff1963c6cf6c.jpg"
              page-url="/id-id/point-blank-id"
            />

            <CardComponent
              title="Magic Chess Go Go"
              description="Vizta Games"
              image-src="https://cdn.ourastore.com/ourastore.com/product/magicchessgogo-ezgif.com-optijpeg.jpg"
              page-url="/id-id/magic-chess-go-go"
            />

            <CardComponent
              title="Metal Slug : Awakening"
              description="VNGGAMES"
              image-src="https://client-cdn.bangjeff.com/9470379d-1836-4297-a582-b9f41eaa3789.webp"
              page-url="/id-id/metal-slug-awakening"
            />

            <CardComponent
              title="EGGY PARTY"
              description="NetEase Games"
              image-src="https://client-cdn.bangjeff.com/0744c20a-06d2-4b0a-af0c-8335897c73a6.webp"
              page-url="/id-id/eggy-party"
            />

            <CardComponent
              title="Call of Duty Mobile"
              description="Garena"
              image-src="https://client-cdn.bangjeff.com/741e9167-79ff-4e4d-bd71-f9ddb26b173b.jpg"
              page-url="/id-id/call-of-duty-mobile"
            />

            <!-- Tambahkan item lain dengan struktur yang sama -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CarouselComponent from "@/components/CarouselComponent.vue";
  import CardComponent from "@/components/CardComponent.vue";

  export default defineComponent({
    name: "HomePage",
    components: {
      CarouselComponent,
      CardComponent,
    },
  });
</script>
