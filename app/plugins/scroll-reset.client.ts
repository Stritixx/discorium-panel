export default defineNuxtPlugin(() => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }

    const router = useRouter()

    router.afterEach(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
    })
})
