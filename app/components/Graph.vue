<script setup lang="ts">
import { useId } from 'vue'

const props = withDefaults(defineProps<{
    color?: string
}>(), {
    color: '#a855f7',
})

const chartId = useId()
const fillId = `chart-fill-${chartId}`

const points: [number, number][] = [
    [0, 78],
    [18, 76],
    [35, 78],
    [55, 72],
    [75, 63],
    [95, 59],
    [120, 59],
    [140, 54],
    [155, 45],
    [170, 30],
    [188, 10]
]

const linePath = computed(() => {
    if (!points.length) return ''

    const firstPoint = points[0]
    if (!firstPoint) return ''

    let path = `M ${firstPoint[0]} ${firstPoint[1]}`

    for (let i = 1; i < points.length; i++) {
        const point = points[i]
        const previousPoint = points[i - 1]
        if (!point || !previousPoint) continue

        const [x, y] = point
        const [prevX, prevY] = previousPoint

        const cpX = (prevX + x) / 2

        path += ` C ${cpX} ${prevY}, ${cpX} ${y}, ${x} ${y}`
    }

    return path
})

const areaPath = computed(() => {
    return `${linePath.value} L 188 100 L 0 100 Z`
})
</script>

<template>
    <div class="relative h-32 w-full overflow-hidden">
        <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            class="size-full"
        >
            <defs>
                <linearGradient
                    :id="fillId"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        :stop-color="props.color"
                        stop-opacity="0.28"
                    />

                    <stop
                        offset="100%"
                        :stop-color="props.color"
                        stop-opacity="0"
                    />
                </linearGradient>
            </defs>

            <!-- gradient under graph -->
            <path
                :d="areaPath"
                :fill="`url(#${fillId})`"
            />

            <!-- graph line -->
            <path
                :d="linePath"
                fill="none"
                :stroke="props.color"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
            />

            <circle
                cx="188"
                cy="10"
                r="10"
                :fill="props.color"
                opacity="0.08"
            />

            <circle
                cx="188"
                cy="10"
                r="6"
                :fill="props.color"
                opacity="0.16"
            />

            <circle
                cx="188"
                cy="10"
                r="3.5"
                :fill="props.color"
            />
        </svg>
    </div>
</template>