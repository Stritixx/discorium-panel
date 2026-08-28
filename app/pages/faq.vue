<script setup>
    import { ref } from 'vue'

    useHead({
        title: 'Discordium - FAQ',

        link: [
            { rel: 'canonical', href: 'https://members.discordium.cc/faq' }
        ]
    });

    const faqItems = [
        {
            question: 'How to redeem key?',
            answer: 'To redeem a key, simply go to the "Redeem Key" page, enter your key and Discord server ID, and click "Redeem". The system will validate your key and assign the members to your server if everything is correct.'
        },
        {
            question: 'How long does it take for members to be added?',
            answer: 'To protect your server and avoid triggering Discord’s automated security systems, members join one-by-one with a staggered delay of roughly 2.5 seconds between each join. A delivery of 100 members takes about 4-5 minutes.'
        },
        {
            question: 'Are accounts looks liek bots?',
            answer: 'No, we are using scrapped profiles from over 30M+ real users to make it most realistic. Accounts got unique avatars, usernames, biograms. Some accounts also own badges and decorations. '
        },
        {
            question: 'Can I redeem multiple keys?',
            answer: 'You can redeem one key at a time through the panel. If you need more access, simply start a new redemption once the previous one is completed.'
        },
        {
            question: 'Can I use purchased key in future?',
            answer: 'If key is not used, it can be redeemed at any time in the future. However, if the key has already been redeemed, it cannot be reused.'
        },
        {
            question: 'Can I delete bot after redeeming key?',
            answer: 'Bot will automatically leave your server after all members have been added. You can also remove the bot manually at any time after the redemption is complete.'
        },
        {
            question: 'What if I encounter issues during redemption?',
            answer: 'If you experience any problems while redeeming a key, please contact our support team through Discord. We are here to assist you and ensure a smooth experience.'
        }
    ]

    const openItem = ref(0)

    const toggleItem = (index) => {
        openItem.value = openItem.value === index ? null : index
    }
</script>

<template>
    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-300 flex-col items-center px-5 pb-14 pt-50 sm:px-8 sm:pb-16">
        <div class="content-left-enter w-full max-w-4xl">
            <div class="mb-10 flex flex-col items-center gap-4 text-center">
                <p class="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                    <span class="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
                    HELP CENTER
                </p>

                <h1 class="text-4xl font-bold leading-[1.08] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                    Frequently asked <span class="bg-linear-to-r from-white via-fuchsia-200 to-fuchsia-500 bg-clip-text text-transparent">questions</span>
                </h1>

                <p class="max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
                    Everything you need to know before redeeming a key, checking stock, or getting support.
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(item, index) in faqItems" :key="item.question" class="faq-item overflow-hidden rounded-2xl border border-zinc-700/40 bg-black/25 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-200 hover:border-fuchsia-500/30 hover:bg-black/35" :class="{ 'faq-item--open': openItem === index }">
                    <button type="button" class="faq-trigger flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6" :aria-expanded="openItem === index" @click="toggleItem(index)">
                        <span class="text-base font-semibold text-white sm:text-lg">{{ item.question }}</span>
                        <span class="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-600/70 bg-zinc-500/5 text-zinc-300">+</span>
                    </button>

                    <div class="faq-answer text-sm leading-7 text-zinc-400 sm:text-base">
                        <div class="faq-answer-inner">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10 rounded-2xl border border-fuchsia-500/20 bg-linear-to-r from-fuchsia-500/8 via-fuchsia-500/4 to-transparent p-5 sm:p-8">
                <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">NEED MORE HELP?</p>
                        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-white">Still have a question?</h2>
                    </div>

                    <a href="https://discord.gg/discorium" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center gap-2 h-12 rounded-xl bg-linear-270 from-fuchsia-400 to-fuchsia-700 px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(217,70,239,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(217,70,239,0.34)]">
                        <SvgDiscord />
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
