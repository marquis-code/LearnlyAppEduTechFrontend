<template>
    <div class="flex w-full md:ml-0">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600 border-b">
          <div
            class="pointer-events-none absolute inset-y-0 left-2 flex items-center"
            aria-hidden="true"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            placeholder="Search products..."
            id="search-field"
            name="search-field"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block h-full w-full border-transparent py-6 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="search"
          />
        </div>
      </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(['update:modelValue']);
</script>


