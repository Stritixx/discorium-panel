<script setup lang="ts">
    import { ref } from 'vue'

    const menuOpen = ref(false)
    const route = useRoute()

    function linkClasses(path: string) {
        const active = route.path === path

        return active
            ? 'nav-link-active bg-fuchsia-500/15 text-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.08)]'
            : 'text-gray-200/80 hover:bg-gray-500/5 hover:text-gray-100'
    }
</script>





<template>
    <nav class="fixed top-0 z-99 flex w-full justify-center bg-black/50 py-3 backdrop-blur-lg sm:py-4 md:backdrop-blur-2xl">
        <div class="absolute w-150 h-150 bg-fuchsia-700/10 -top-50 rounded-full blur-[150px] left-1/2 -translate-x-1/2 pointer-events-none select-none"></div>

        <div class="flex h-full w-full max-w-300 items-center justify-between gap-3 px-5 sm:px-8">
            <NuxtLink to="/" class="flex shrink-0 items-center gap-3" aria-label="Discorium - Home">
                <img src="/images/logo.png" width="42" height="42" alt="" class="drop-shadow-[0_0_22px_rgba(217,70,239,0.3)]" />

                <span class="text-primary text-[16px] font-semibold">Discorium</span>
            </NuxtLink>

            <div class="hidden md:block">
                <ul class="flex w-max items-center gap-1 text-[13px] text-gray-200/80 lg:gap-2">
                    <li><NuxtLink to="/" class="block rounded-md px-4 py-2 transition-all duration-150" :class="linkClasses('/')">Home</NuxtLink></li>
                    <li><NuxtLink to="/redeem" class="block rounded-md px-4 py-2 transition-all duration-150" :class="linkClasses('/redeem')">Redeem Key</NuxtLink></li>
                    <li><NuxtLink to="/stock" class="block rounded-md px-4 py-2 transition-all duration-150" :class="linkClasses('/stock')">Stock</NuxtLink></li>
                </ul>
            </div>

            <div class="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
                <NuxtLink to="/shop" class="hidden cursor-pointer rounded-md border border-gray-500/20 px-4 py-2 text-[12px] text-gray-200 transition hover:border-gray-500/30 hover:bg-gray-500/5 md:block">Back to shop</NuxtLink>

                <button type="button" class="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-gray-200 transition duration-300 md:hidden" :aria-expanded="menuOpen" aria-controls="navigation-menu" aria-label="Toggle navigation menu" @click.stop="menuOpen = !menuOpen">
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? 'rotate-45' : '-translate-y-2'"></span>
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? 'opacity-0' : 'opacity-100'"></span>
                    <span class="absolute h-px w-5 rounded-full bg-current transition-all duration-300" :class="menuOpen ? '-rotate-45' : 'translate-y-2'"></span>
                </button>
            </div>
        </div>

        <Transition enter-active-class="transition duration-100 ease-out" enter-from-class="-translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-100 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-2 opacity-0">
            <div v-if="menuOpen" id="navigation-menu" class="absolute left-0 top-full z-10 w-full rounded-xl border border-fuchsia-500/10 bg-fuchsia-900/5 px-5 py-3 shadow-xl backdrop-blur-2xl sm:px-8 md:hidden">
                <ul class="flex flex-col gap-1 text-sm text-gray-200/80">
                    <li><NuxtLink to="/" class="block rounded-md px-3 py-2 transition-all duration-150" :class="linkClasses('/')" @click="menuOpen = false">Home</NuxtLink></li>
                    <li><NuxtLink to="/redeem" class="block rounded-md px-3 py-2 transition-all duration-150" :class="linkClasses('/redeem')" @click="menuOpen = false">Redeem Key</NuxtLink></li>
                    <li><NuxtLink to="/stock" class="block rounded-md px-3 py-2 transition-all duration-150" :class="linkClasses('/stock')" @click="menuOpen = false">Stock</NuxtLink></li>
                    <li><NuxtLink to="/shop" class="block rounded-md px-3 py-2 hover:bg-gray-500/5" @click="menuOpen = false">Shop</NuxtLink></li>
                </ul>
            </div>
        </Transition>
    </nav>
</template>