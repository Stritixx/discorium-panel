<script setup>
    useHead({
        title: 'Discordium - Terms of Service',

        link: [
            { rel: 'canonical', href: 'https://members.discordium.cc/terms' }
        ]
    });

    const sections = [
        {
            number: '01',
            title: 'Members Warranty',
            paragraphs: [
                'We provide 30-day warranty for all orders. Warranty doesn\'t cover if members are kicked or banned by anti-raid systems / bots or staffs.',
            ]
        },
        {
            number: '02',
            title: 'Members transfer',
            paragraphs: [
                'Members cannot be transferred to another server. If u want to add members to another server, you need to redeem a new key for that server.',
            ]
        },
        {
            number: '03',
            title: 'Refund policy',
            paragraphs: [
                'We don\t provide refunds for keys. If you have any issues with your order, please contact our support team through Discord and we will assist you.',
            ]
        },
        {
            number: '04',
            title: 'Delivery times',
            paragraphs: [
                'If our systems are under heavy load, delivery may take longer than usual. We will do our best to deliver your order as quickly as possible. If you experience any delays, please contact our support team through Discord and we will assist you.',
            ]
        },
        {
            number: '05',
            title: 'Limitation of liability',
            paragraphs: [
                'Discordium is provided on an availability basis. We are not responsible for interruptions, delays, account actions, server restrictions, or other issues caused by Discord, third-party services, or incorrect information supplied by you.',
                'You use the service at your own discretion and are responsible for ensuring that its use is appropriate for your server.'
            ]
        }
    ]
</script>

<template>
    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-300 flex-col items-center px-5 pb-16 pt-50 sm:px-8 sm:pb-20">
        <div class="content-left-enter w-full max-w-4xl">
            <div class="mb-10 flex flex-col items-center gap-4 text-center">
                <p class="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                    <span class="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
                    LEGAL / TERMS
                </p>

                <h1 class="text-4xl font-bold leading-[1.08] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                    Terms of <span class="bg-linear-to-r from-white via-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent">Service</span>
                </h1>

                <p class="max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
                    The rules and conditions for using Discordium services.
                </p>
            </div>

            <div class="space-y-4">
                <section v-for="section in sections" :key="section.number" class="rounded-2xl border border-zinc-700/40 bg-black/25 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-200 hover:border-fuchsia-500/25 hover:bg-black/35 sm:p-7">
                    <div class="flex gap-4 sm:gap-6">
                        <span class="pt-1 text-xs font-semibold tracking-[0.2em] text-fuchsia-400">{{ section.number }}</span>

                        <div class="min-w-0">
                            <h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">{{ section.title }}</h2>

                            <div class="mt-3 space-y-3 text-sm leading-7 text-zinc-400 sm:text-base">
                                <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="mt-10 rounded-2xl border border-fuchsia-500/20 bg-linear-to-r from-fuchsia-500/8 via-fuchsia-500/4 to-transparent p-5 sm:p-8">
                <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">QUESTIONS?</p>
                        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-white">Need help with something?</h2>
                    </div>

                    <a href="https://discord.gg/discorium" target="_blank" rel="noopener noreferrer" class="flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(217,70,239,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(217,70,239,0.34)]">
                        <SvgDiscord />
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
