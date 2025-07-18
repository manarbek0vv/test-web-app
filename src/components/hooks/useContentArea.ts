import { useEffect, useState } from 'react'

type ContentArea = {
    top: number
    bottom: number
    left: number
    right: number
}

export function useContentArea(): ContentArea {
    const [contentArea, setContentArea] = useState<ContentArea>({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    })

    useEffect(() => {
        const tg = Telegram.WebApp

        if (!tg) return

        const updateInsets = () => {
            const insets = tg.contentSafeAreaInset
            if (insets) {
                setContentArea({
                    top: insets.top || 0,
                    bottom: insets.bottom || 0,
                    left: insets.left || 0,
                    right: insets.right || 0,
                })
            }
        }

        tg.ready()

        // сразу попробовать обновить (после небольшой задержки)
        setTimeout(updateInsets, 50)

        // слушаем событие изменения
        tg.onEvent('viewportChanged', updateInsets)

        return () => {
            tg.offEvent('viewportChanged', updateInsets)
        }
    }, [])

    return contentArea
}
