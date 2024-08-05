<template>
  <main>
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div class="flex items-center justify-between space-x-4">
          <h2 class="text-lg font-medium text-gray-900">Products List</h2>
        </div>
        <div  v-if="!loading && filteredProducts.length" class="bg-white">
          <div class="mx-auto max-w-2xl lg:max-w-7xl">
        
            <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              <div  v-for="item in filteredProducts" :key="item">
                <div class="relative">
                  <div class="relative h-72 w-full overflow-hidden rounded-lg">
                    <img :src="item.imageURL"
                    :alt="item.description"  class="h-full w-full object-cover object-center">
                  </div>
                  <div class="relative mt-4">
                    <h3 class="text-sm font-medium text-gray-900">{{ item.name }}</h3>
                    <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                  </div>
                  <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                    <p class="relative text-lg font-semibold text-white">{{ formatPrice(item.price) }}</p>
                  </div>
                </div>
                <div class="mt-6">
                  <a href="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      <div  v-else-if="loading" class="grid grid-cols-4 gap-6">
        <div v-for="item in 4" :key="item" class="h-40 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>
      </div>
        <div class="text-center border rounded-xl py-6 mt-6" v-else>
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 class="mt-2 text-sm font-semibold text-gray-900">
            No products available
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            You need to be <span class="font-bold text-gray-900">LoggedIn</span> to see all products.
          </p>
          <p class="mt-1 text-sm text-gray-500">
            Get started by creating an account to create a new product.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- pages/index.vue -->
<script setup lang="ts">
import { useFetchAllProductsList } from "@/composables/products/fetchAllProducts";
const { filteredProducts, loading } = useFetchAllProductsList();

const formatPrice = (price: any) => {
  if (price == null) return 'Nil';
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
};
</script>
