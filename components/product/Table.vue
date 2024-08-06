<template>
    <main>
        <!-- <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Name
                        </th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Description
                        </th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Price
                        </th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Created At
                        </th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="product in filteredProducts" :key="product.id">
                        <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div class="flex items-center">
                                <div class="h-11 w-11 flex-shrink-0">
                                    <CoreImageZoom v-if="product.imageURL" class="h-10 w-10" :src="product.imageURL" />
                                </div>
                                <div class="ml-4">
                                    <div class="font-medium text-gray-900">
                                        {{ product.name || "Nil" }}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            {{ product.description.slice(0, 30) + "..." || "Nil" }}
                        </td>
                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            {{ formatPrice(product.price) || "Nil" }}
                        </td>
                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            {{
                        moment.utc(product.createdAt).format("MMMM Do YYYY") ||
                        "Nil"
                    }}
                        </td>
                        <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <div class="flex items-center justify-center gap-x-4">
                                <a @click.prevent="handleEditProduct(product)" href="#"
                                    class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a @click.prevent="deleteProduct(product._id)" href="#"
                                    class="text-red-600 hover:text-red-900">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->

        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                    <tr>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Name</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Description</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Price</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Created At</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Actions</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    <tr v-for="product in filteredProducts" :key="product.id" class="odd:bg-gray-50">
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            <div class="flex items-center">
                                <div class="h-11 w-11 flex-shrink-0">
                                    <CoreImageZoom v-if="product.imageURL" class="h-10 w-10" :src="product.imageURL" />
                                </div>
                                <div class="ml-4">
                                    <div class="font-medium text-gray-900">
                                        {{ product.name || "Nil" }}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ product.description.slice(0, 30) + "..." || "Nil" }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ formatPrice(product.price) || "Nil" }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                            {{
                                moment.utc(product.createdAt).format("MMMM Do YYYY") ||
                                "Nil"
                            }}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                            <div class="flex items-center justify-center gap-x-4">
                                <a @click.prevent="handleEditProduct(product)" href="#"
                                    class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a @click.prevent="deleteProduct(product._id)" href="#"
                                    class="text-red-600 hover:text-red-900">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup lang="ts">
import moment from "moment";
import { useDeleteProduct } from "@/composables/products/delete";
const { deleteProduct, loading: deleting } = useDeleteProduct();
defineProps({
    filteredProducts: {
        type: Array,
        default: () => []
    }
})

const formatPrice = (price: any) => {
    if (price == null) return "Nil";
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(price);
};

const emit = defineEmits<{
    (event: 'edit', data: any): void
}>()

const handleEditProduct = (product: any) => {
    emit('edit', product)
};
</script>
