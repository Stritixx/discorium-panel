<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
    serverId: '',
    redeemKey: '',
})

const errors = reactive({
    serverId: '',
    redeemKey: '',
})

const submitted = ref(false)

function validateForm() {
    errors.serverId = ''
    errors.redeemKey = ''
    submitted.value = false

    if (!form.serverId.trim()) {
        errors.serverId = 'Server ID is required.'
    } else if (!/^\d{17,20}$/.test(form.serverId.trim())) {
        errors.serverId = 'Enter a valid Discord server ID.'
    }

    if (!form.redeemKey.trim()) {
        errors.redeemKey = 'Redeem key is required.'
    } else if (!/^[A-Za-z0-9]{4}(?:-[A-Za-z0-9]{4}){3}$/.test(form.redeemKey.trim())) {
        errors.redeemKey = 'Use the format XXXX-XXXX-XXXX-XXXX.'
    }

    if (!errors.serverId && !errors.redeemKey) {
        submitted.value = true
    }
}
</script>

<template>
    <Background />

    <Navbar />

    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-300 items-center justify-center px-5 pb-10 pt-28 sm:px-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:gap-20 lg:py-28">
        <div class="hidden w-full flex-col justify-center gap-6 lg:flex">
            <p class="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                <span class="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
                MEMBER ACCESS
            </p>

            <h2 class="max-w-md text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">Welcome to your <span class="bg-linear-to-r from-white via-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent">members area</span></h2>
            <p class="max-w-sm text-base leading-6 text-zinc-500 sm:text-[18px]">Redeem your Discord member key and connect it to your server in seconds.</p>

            <div class="flex items-center gap-4 mt-4">
                <div class="p-2 rounded-lg border border-gray-700/30 bg-gray-500/5 text-fuchsia-400">
                    <SvgSpeedIcon />
                </div>

                <p class="text-zinc-500 text-[14px]">Fast, secure activation</p>
            </div>
        </div>

        <div class="flex w-full flex-col items-center justify-center gap-6">
            <div class="w-full max-w-xl lg:hidden mb-8">
                <p class="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400 justify-center">MEMBER ACCESS</p>
                <h2 class="mt-3 text-6xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-7xl text-center max-[400px]:text-5xl">Redeem your <span class="bg-linear-to-r from-white via-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent">member key</span></h2>
            </div>

            <form id="redeem" class="w-full max-w-xl rounded-2xl border border-gray-700/40 bg-black/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:p-8" novalidate @submit.prevent="validateForm">
                <div class="flex items-start justify-between gap-4">
                    <div class="min-w-0">
                        <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">DISCORIUM / REDEEM</p>
                        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Redeem a member</h2>
                    </div>

                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/15 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
                        <SvgSpeedIcon />
                    </div>
                </div>

                <div class="mt-8 space-y-5">
                    <label class="block">
                        <span class="text-xs font-semibold text-zinc-300">Server ID</span>
                        <input v-model="form.serverId" type="text" name="serverId" inputmode="numeric" autocomplete="off" placeholder="Enter your Discord server ID" :aria-invalid="!!errors.serverId" aria-describedby="server-id-error" class="mt-2 h-12 w-full rounded-xl border bg-gray-500/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-2" :class="errors.serverId ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/10' : 'border-gray-700/50 focus:border-fuchsia-500/60 focus:ring-fuchsia-500/10'" />
                        <span v-if="errors.serverId" id="server-id-error" class="mt-2 block text-xs text-red-400">{{ errors.serverId }}</span>
                    </label>

                    <label class="block">
                        <span class="text-xs font-semibold text-zinc-300">Redeem key</span>
                        <input v-model="form.redeemKey" type="text" name="redeemKey" autocomplete="off" placeholder="XXXX-XXXX-XXXX-XXXX" :aria-invalid="!!errors.redeemKey" aria-describedby="redeem-key-error" class="mt-2 h-12 w-full rounded-xl border bg-gray-500/5 px-4 text-sm tracking-wider text-white outline-none transition placeholder:text-zinc-600 focus:ring-2" :class="errors.redeemKey ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/10' : 'border-gray-700/50 focus:border-fuchsia-500/60 focus:ring-fuchsia-500/10'" />
                        <span v-if="errors.redeemKey" id="redeem-key-error" class="mt-2 block text-xs text-red-400">{{ errors.redeemKey }}</span>
                    </label>
                </div>

                <button type="submit" class="cursor-pointer mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 text-sm font-semibold text-white shadow-[0_0_28px_rgba(217,70,239,0.28)] transition hover:bg-fuchsia-400">
                    Redeem Key
                </button>

                <p v-if="submitted" class="mt-4 text-center text-xs text-emerald-400">Your key is ready to be redeemed.</p>

                <div class="mt-8 flex items-center justify-center gap-2 border-t border-gray-700/30 pt-6 text-xs text-zinc-500">
                    - Keys are securely validated -
                </div>
            </form>
        </div>
    </main>
</template>