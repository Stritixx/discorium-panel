<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
    <nav class="fixed top-0 z-99 flex w-full justify-center py-3 sm:py-4">
        <div class="absolute w-150 h-150 bg-fuchsia-700/10 -top-50 rounded-full blur-[150px] left-1/2 -translate-x-1/2 pointer-events-none select-none"></div>

        <div class="flex h-full w-full max-w-300 items-center justify-between gap-3 px-5 sm:px-8">
            <div class="flex shrink-0 items-center gap-3">
                <img src="/images/logo.png" width="42" height="42" alt="Logo" class="drop-shadow-[0_0_22px_rgba(217,70,239,0.3)]" />

                <h1 class="text-primary text-[16px] font-semibold">Discorium</h1>
            </div>

            <div class="hidden md:block">
                <ul class="flex w-max items-center gap-1 text-[13px] text-gray-200/80 lg:gap-6">
                    <li><a href="#" class="block rounded-md px-4 py-2 transition hover:bg-gray-500/5">Home</a></li>
                    <li><a href="#redeem" class="block rounded-md bg-fuchsia-500/15 px-4 py-2 transition hover:bg-fuchsia-500/20">Redeem Key</a></li>
                    <li><a href="#stock" class="block rounded-md px-4 py-2 transition hover:bg-gray-500/5">Stock</a></li>
                </ul>
            </div>

            <div class="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
                <a href="/shop" class="hidden cursor-pointer rounded-md border border-gray-500/20 px-4 py-2 text-[12px] text-gray-200 transition hover:border-gray-500/30 hover:bg-gray-500/5 md:block">Back to shop</a>

                <button type="button" class="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-gray-200 transition duration-300 md:hidden" :aria-expanded="menuOpen" aria-controls="navigation-menu" aria-label="Toggle navigation menu" @click.stop="menuOpen = !menuOpen">
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? 'rotate-45' : '-translate-y-2'"></span>
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? 'opacity-0' : 'opacity-100'"></span>
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? '-rotate-45' : 'translate-y-2'"></span>
                </button>
            </div>
        </div>

        <Transition enter-active-class="transition duration-100 ease-out" enter-from-class="-translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-100 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-2 opacity-0">
            <div v-if="menuOpen" id="navigation-menu" class="absolute left-0 top-full w-full rounded-xl bg-black/15 px-5 py-3 shadow-xl backdrop-blur-lg sm:px-8 md:hidden">
                <ul class="flex flex-col gap-1 text-sm text-gray-200/80">
                    <li><a href="#" class="block rounded-md px-3 py-2 hover:bg-gray-500/5" @click="menuOpen = false">Home</a></li>
                    <li><a href="#redeem" class="block rounded-md bg-fuchsia-500/15 px-3 py-2 text-fuchsia-200" @click="menuOpen = false">Redeem Key</a></li>
                    <li><a href="#stock" class="block rounded-md px-3 py-2 hover:bg-gray-500/5" @click="menuOpen = false">Stock</a></li>
                    <li><a href="/shop" class="block rounded-md px-3 py-2 hover:bg-gray-500/5" @click="menuOpen = false">Shop</a></li>
                </ul>
            </div>
        </Transition>
    </nav>
</template>