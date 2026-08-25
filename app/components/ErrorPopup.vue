<script setup>
    const props = defineProps({
        open: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Error',
        },
        message: {
            type: String,
            default: 'Something went wrong.',
        },
        success: {
            type: Boolean,
            default: false,
        },
    })

    const emit = defineEmits(['close'])

    const closePopup = () => {
        emit('close')
    }

    const closeOnOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closePopup()
        }
    }
</script>

<template>
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm" @click="closeOnOverlayClick">
            <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <div v-if="open" class="w-full max-w-md rounded-2xl border border-zinc-600/10 bg-black/40 p-5 ring-1 ring-white/5 backdrop-blur-md" @click.stop>
                    <div class="flex items-start justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <div class="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold" :class="success ? 'border border-green-400/20 bg-green-500/10 text-green-300 shadow-[0_0_22px_rgba(74,222,128,0.16)]' : 'border border-red-400/20 bg-red-500/10 text-red-300 shadow-[0_0_22px_rgba(248,113,113,0.16)]'"><span>{{ success ? '✓' : '!' }}</span></div>
                        <div>

                        <p class="text-[10px] font-semibold uppercase tracking-[0.26em]" :class="success ? 'text-green-300' : 'text-red-300'">{{ success ? 'Success' : 'Error' }}</p>
                        <h3 class="mt-1 text-lg font-semibold text-zinc-200">{{ title }}</h3>
                    </div>
                </div>

            <button type="button" class=" absolute -right-1.5 -top-1.5 cursor-pointer flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-600/20 bg-black text-lg text-zinc-400 duration-200 hover:-top-2.25 hover:-right-2.25" aria-label="Close popup" @click="closePopup">×</button>
          </div>

          <p class="mt-6 text-sm leading-6 text-zinc-300">
            {{ message }}
          </p>

          <button type="button" class="mt-6 cursor-pointer flex h-11 w-full items-center justify-center rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 text-sm font-semibold text-white shadow-[0_0_28px_rgba(217,70,239,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(217,70,239,0.32)]" @click="closePopup">Close</button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
