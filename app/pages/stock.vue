<template>
    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-300 items-center px-5 pb-10 pt-28 sm:px-8 flex-wrap justify-center flex-col gap-12">
        <div class="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
            <div class="flex w-full flex-col justify-end lg:w-1/2">
                <div class="stock-heading-enter w-full flex flex-col gap-4">
                    <p class="w-full flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                        <span class="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]"></span>
                        LIVE STOCK
                    </p>

                    <h1 class="text-4xl font-bold leading-[1.1] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">Members stock</h1>

                    <p class="text-zinc-500">A live overview of the members currently available for instant delivery.</p>
                </div>
            </div>

            <div class="flex w-full flex-col items-start justify-end lg:w-1/2 lg:items-end">
                <button class="stock-refresh-enter self-end rounded-xl border border-zinc-500/20 px-8 py-2.5 text-zinc-200 flex gap-2 items-center">
                    <SvgRefreshIcon />
                    Refresh Stock
                </button>
            </div>
        </div>

        <div class="flex h-auto w-full flex-col gap-6 lg:h-80 lg:flex-row lg:gap-12">
            <div class="stock-box-enter stock-box-left-enter relative h-80 w-full lg:h-full lg:w-1/2">
                <div class="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200/10 p-8 flex flex-col justify-between">
                    <div class="pointer-events-none absolute -left-5 -top-5 z-0 isolate">
                        <div class="h-10 w-10 bg-purple-500 blur-[100px]"></div>
                    </div>
                    <div class="pointer-events-none absolute -bottom-5 -right-5 z-0 isolate">
                        <div class="h-20 w-20 bg-purple-500 blur-[150px]"></div>
                    </div>

                    <div class="relative z-10">
                        <div class="flex w-full justify-between">
                            <div class="rounded-xl border border-purple-900/30 bg-purple-900/10 p-4 text-purple-900">
                                <SvgJoystick />
                            </div>

                            <p class="self-start inline-flex items-center gap-2 rounded-full border border-purple-900/30 bg-purple-900/10 px-4 py-1.5 text-[12px] text-purple-500">
                                <span class="h-2 w-2 shrink-0 rounded-full bg-purple-500"></span>
                                LIVE
                            </p>
                        </div>

                        <div class="w-full h-8 mt-6">
                            <p class="text-zinc-200 font-semibold text-xl">Offline Members</p>

                            <p class="font-bold text-5xl text-zinc-200 mt-4">5000</p>
                        </div>
                    </div>

                    <div class="pointer-events-none absolute bottom-10 right-4 z-0 isolate">
                        <Graph />
                    </div>

                    <div class="stock-status-glass relative z-10 w-full px-6 py-3 rounded-lg border border-gray-500/20 flex gap-4 items-center">
                        <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <p class="text-zinc-200 text-sm">Available in stock</p>
                    </div>
                </div>

                <div class="stock-box-fade-cover pointer-events-none absolute inset-0 z-20 rounded-2xl bg-background"></div>
            </div>

            <div class="stock-box-enter stock-box-right-enter relative h-80 w-full lg:h-full lg:w-1/2">
                <div class="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200/10 p-8 flex flex-col justify-between">
                    <div class="pointer-events-none absolute -left-5 -top-5 z-0 isolate">
                        <div class="h-10 w-10 bg-green-500 blur-[100px]"></div>
                    </div>
                    <div class="pointer-events-none absolute -bottom-5 -right-5 z-0 isolate">
                        <div class="h-20 w-20 bg-green-500 blur-[150px]"></div>
                    </div>

                    <div class="relative z-10">
                        <div class="flex w-full justify-between">
                            <div class="rounded-xl border border-green-900/30 bg-green-900/10 p-4 text-green-900">
                                <SvgJoystick />
                            </div>

                            <p class="self-start inline-flex items-center gap-2 rounded-full border border-green-900/30 bg-green-900/10 px-4 py-1.5 text-[12px] text-green-500">
                                <span class="h-2 w-2 shrink-0 rounded-full bg-green-500"></span>
                                LIVE
                            </p>
                        </div>

                        <div class="w-full h-8 mt-6">
                            <p class="text-zinc-200 font-semibold text-xl">Online Members</p>

                            <p class="font-bold text-5xl text-zinc-200 mt-4">2500</p>
                        </div>
                    </div>

                    <div class="pointer-events-none absolute bottom-10 right-4 z-0 isolate">
                        <Graph color="#22c55e" />
                    </div>

                    <div class="stock-status-glass relative z-10 w-full px-6 py-3 rounded-lg border border-gray-500/20 flex gap-4 items-center">
                        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                        <p class="text-zinc-200 text-sm">Available in stock</p>
                    </div>
                </div>

                <div class="stock-box-fade-cover pointer-events-none absolute inset-0 z-20 rounded-2xl bg-background"></div>
            </div>
        </div>
    </main>
</template>
