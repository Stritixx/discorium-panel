<script setup>
    import { computed, ref, onMounted } from 'vue'

    const route = useRoute()

    const orderData = ref({
        serverId: '',
        guildId: '',
        membersType: '',
        quantity: 0,
        key: '',
    })


    const isSubmitting = ref(false)
    const isLoadingDetails = ref(false)
    const showErrorPopup = ref(false)
    const isSuccessPopup = ref(false)
    const popupTitle = ref('Request failed')
    const popupMessage = ref('Something went wrong while starting your order.')

    
    const payload = computed(() => ({
        server_id: orderData.value.serverId,
        guild_id: orderData.value.guildId,
        members_type: orderData.value.membersType,
        quantity: Number(orderData.value.quantity),
        key: orderData.value.key,
    }))


    const applyOrderDetails = (response, fallbackKey = '') => {
        orderData.value.serverId = String(response?.server_id || '')
        orderData.value.guildId = String(response?.guild_id || '')
        orderData.value.membersType = String(response?.members_type || '')
        orderData.value.quantity = Number(response?.quantity || 0)
        orderData.value.key = String(response?.key || fallbackKey || '')
    }


    const loadFromQuery = () => {
        const queryKey = String(route.query.key || '')
        orderData.value.key = queryKey

        if (queryKey) {
            isLoadingDetails.value = true

            try {
                const storedValue = sessionStorage.getItem('order_flow_state')

                if (storedValue) {
                    const parsed = JSON.parse(storedValue)
                    applyOrderDetails(parsed, queryKey)
                }

            } catch (error) {
                console.error('Failed to load order details from session:', error)

            } finally {
                isLoadingDetails.value = false
            }
        }
    }


    onMounted(() => {
        loadFromQuery()
    })

    const openErrorPopup = (title, message) => {
        isSuccessPopup.value = false
        popupTitle.value = title
        popupMessage.value = message
        showErrorPopup.value = true
    }

    const openSuccessPopup = (title, message) => {
        isSuccessPopup.value = true
        popupTitle.value = title
        popupMessage.value = message
        showErrorPopup.value = true
    }

    const closeErrorPopup = () => {
        showErrorPopup.value = false
    }


    const submitOrder = async () => {
        if (isSubmitting.value) {
            return
        }

        isSubmitting.value = true

        try {
            const response = await $fetch.raw('https://delivery.discorium.cc/api/order/start', {
                method: 'POST',
                body: payload.value,
            })

            if (response.status === 200) {
                const data = response._data
                openSuccessPopup('Order started', data?.message || 'Your order was started successfully.')
            } else {
                const data = response._data
                const message = data?.message || data?.error || 'An unexpected error occurred while starting your order.'
                openErrorPopup(`Request failed (${response.status})`, message)
            }
        } catch (error) {
            const statusCode = error?.statusCode || error?.response?.status || 500
            const data = error?.data || error?.response?._data
            const message = data?.error || data?.message || 'An unexpected error occurred while starting your order.'

            openErrorPopup(`Request failed (${statusCode})`, message)
        } finally {
            isSubmitting.value = false
        }
    }
</script>

<template>
    <ErrorPopup :open="showErrorPopup" :success="isSuccessPopup" :title="popupTitle" :message="popupMessage" @close="closeErrorPopup" />

    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-300 items-center justify-center px-5 pb-10 pt-28 sm:px-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:gap-20 lg:py-28">
        <div class="content-left-enter hidden w-full flex-col justify-center gap-6 lg:flex">
            <p class="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                <span class="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
                ORDER SETUP
            </p>

            <h2 class="max-w-md text-4xl font-bold leading-[1.1] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">Finalize your <span class="bg-linear-to-r from-white via-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent">server order</span></h2>
            <p class="max-w-sm text-base leading-6 text-zinc-500 sm:text-[18px]">Your key was successfully validated. Confirm the server configuration before adding the bot.</p>

            <div class="mt-2 flex max-w-md flex-col gap-2 text-zinc-200">
                <div class="flex items-center gap-4">
                    <span class="w-9 h-9 flex justify-center items-center rounded-lg border border-gray-700/30 font-semibold bg-gray-500/5 text-fuchsia-400">1</span>
                    <span class="text-sm text-zinc-400">Check if order details is correct.</span>
                </div>

                <div class="flex items-center gap-4">
                    <span class="w-9 h-9 flex justify-center items-center rounded-lg border border-gray-700/30 font-semibold bg-gray-500/5 text-fuchsia-400">2</span>
                    <span class="text-sm text-zinc-400">Add bot to the server.</span>
                </div>

                <div class="flex items-center gap-4">
                    <span class="w-9 h-9 flex justify-center items-center rounded-lg border border-gray-700/30 bg-gray-500/5 text-fuchsia-400">3</span>
                    <span class="text-sm text-zinc-400">Click redeem button.</span>
                </div>
            </div>
        </div>

        <div class="content-right-enter flex w-full flex-col items-center justify-center gap-6">
            <form class="w-full max-w-xl rounded-2xl border border-gray-700/40 bg-black/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:p-8" novalidate>
                <div class="flex items-start justify-between gap-4">
                    <div class="min-w-0">
                        <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">DISCORIUM / ORDER</p>
                        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Server config</h2>
                    </div>

                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-fuchsia-500/15 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
                        <SvgSpeedIcon />
                    </div>
                </div>

                <a href="https://discord.com/oauth2/authorize?client_id=1540333008501084160&permissions=8&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer" class="mt-7 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#5865F2] text-sm font-semibold text-white shadow-[0_0_28px_rgba(88,101,242,0.28)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(88,101,242,0.4)]">
                    <SvgDiscord class="h-4 w-4" />
                    Add bot
                </a>

                <div class="mt-7 space-y-5">
                    <label class="block">
                        <span class="text-xs font-semibold text-zinc-300">Guild ID</span>
                        <input :value="orderData.guildId" type="text" readonly class="mt-2 h-12 w-full rounded-xl border border-gray-700/50 bg-gray-500/5 px-4 text-sm text-white outline-none" />
                    </label>

                    <div class="grid gap-5 sm:grid-cols-2">
                        <label class="block">
                            <span class="text-xs font-semibold text-zinc-300">Members Type</span>
                            <input :value="orderData.membersType" type="text" readonly class="mt-2 h-12 w-full rounded-xl border border-gray-700/50 bg-gray-500/5 px-4 text-sm text-white outline-none" />
                        </label>

                        <label class="block">
                            <span class="text-xs font-semibold text-zinc-300">Amount</span>
                            <input :value="orderData.quantity" type="text" readonly class="mt-2 h-12 w-full rounded-xl border border-gray-700/50 bg-gray-500/5 px-4 text-sm text-white outline-none" />
                        </label>
                    </div>

                    <label class="block">
                        <span class="text-xs font-semibold text-zinc-300">Key</span>
                        <input :value="orderData.key" type="text" readonly class="mt-2 h-12 w-full rounded-xl border border-gray-700/50 bg-gray-500/5 px-4 text-sm tracking-wider text-white outline-none" />
                    </label>
                </div>

                <button @click="submitOrder" type="button" :disabled="isSubmitting" class="mt-8 flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 text-sm font-semibold text-white shadow-[0_0_28px_rgba(217,70,239,0.28)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(217,70,239,0.4)] disabled:cursor-not-allowed disabled:opacity-70">
                    <span v-if="isSubmitting" class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                    {{ isSubmitting ? 'Processing...' : 'Redeem' }}
                </button>
            </form>
        </div>
    </main>
</template>
