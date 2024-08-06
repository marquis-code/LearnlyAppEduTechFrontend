<template>
<main class="sticky top-0">
    <section class="bg-white border-[0.6px] border-gray-100 h-20 shadow sticky top-0 z-50">
        <header class="absolute inset-x-0 top-0 z-20 max-w-7xl mx-auto">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-10 w-auto" src="@/assets/icons/ecommerce-logo.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" @click="isMobileNav = true"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <NuxtLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Product</NuxtLink>
                </div>
                <div  class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div class="flex items-center  gap-x-4">
                        <NuxtLink v-if="!isLoggedIn" to="/login" href="#" class="text-sm font-semibold leading-6 text-gray-900">Log
                            in <span aria-hidden="true"></span></NuxtLink>
                        <NuxtLink v-if="!isLoggedIn" to="/signup"
                            class="text-sm font-medium leading-6 text-white bg-[#011633] px-6 rounded-full py-2">
                            Sign
                            up<span aria-hidden="true"></span></NuxtLink>
                            <a v-if="isLoggedIn" href="#" @click.prevent="logOut"
                            class="text-sm font-medium leading-6 text-white bg-[#011633] px-6 rounded-full py-2">
                            Logout<span aria-hidden="true"></span></a>
                    </div>
                </div>
            </nav>
            <div v-if="isMobileNav" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-900/80"></div>

                <div class="fixed inset-0 flex">
                    <div class="relative mr-16 flex w-full max-w-xs flex-1">
                        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                            <button @click="isMobileNav = false" type="button" class="-m-2.5 p-2.5">
                                <span class="sr-only">Close sidebar</span>
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            <div class="flex h-16 shrink-0 items-center">
                                <NuxtLink to="/"><img class="h-5 w-auto" src="@/assets/icons/ecommerce-logo.svg" alt="Your Company"></NuxtLink>
                            </div>
                            <nav class="flex flex-1 flex-col">
                                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" class="-mx-2 space-y-3">
                                            <li>
                                                <a href="#products" @click.native="isMobileNav = false"
                                                    class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                    <svg class="h-6 w-6 shrink-0 text-indigo-600" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                    </svg>
                                                    Product
                                                </a>
                                            </li>
                                            <li>
                                                <NuxtLink to="/login"
                                                    class="text-center pl-4 bg-green-500 text-white 0 group flex gap-x-3 rounded-md p-2 py-2.5 text-sm leading-6 font-semibold">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1C274C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
                                                    Login
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>
</main>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
const { user, isLoggedIn, logOut, } = useLogin()
const isMobileNav = ref(false)
const router = useRouter()

</script>