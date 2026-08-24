<script setup>
	useHead({
	    title: 'Discordium - Premium Services for Discord',
        
        link: [
            { rel: 'canonical', href: 'https://members.discordium.cc' }
        ]
	});
</script>


<template>
    <main class="content-left-enter relative z-10 mx-auto flex min-h-screen w-full max-w-300 flex-col items-center justify-start gap-4 px-4 pb-16 pt-[30vh] sm:justify-center sm:px-8 sm:pb-16 sm:pt-28">
        <p class="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
            <span class="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
            DISCORIUM.CC
        </p>

		<h1 class="max-w-200 text-center text-[clamp(2rem,12vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-white">Trusted Services <span class="bg-linear-to-r from-white via-fuchsia-300 to-fuchsia-500 bg-clip-text text-transparent">Instant Delivery.</span></h1>

        <h2 class="mt-6 max-w-xl px-2 text-center text-base font-semibold leading-6 text-zinc-400 sm:text-xl">Everything you need for Discord, delivered instantly.</h2>

        <div class="mt-8 flex max-w-full flex-row items-center gap-3">
            <NuxtLink to="/redeem" class="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 px-8 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(217,70,239,0.24)] transition duration-200 hover:-translate-y-1 hover:bg-fuchsia-400 hover:shadow-[0_12px_28px_rgba(217,70,239,0.34)]">
                Redeem Key
                <SvgKey class="shrink-0" />
            </NuxtLink>

            <NuxtLink to="https://discorium.cc/" class="flex h-12 shrink-0 items-center justify-center rounded-xl border border-zinc-500/20 px-8 text-sm font-semibold text-zinc-200 shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:border-zinc-500/40 hover:bg-zinc-500/10 hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                Shop
            </NuxtLink>
        </div>
	</main>
</template>