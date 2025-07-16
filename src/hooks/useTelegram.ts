export function useTelegram() {
    // @ts-ignore
    const tg = window.Telegram?.WebApp;

    return {
        tg,
        close: () => tg?.close(),
        showBackButton: () => tg?.BackButton.show(),
        hideBackButton: () => tg?.BackButton.hide(),
        onBackClick: (cb: () => void) => tg?.BackButton.onClick(cb),
        showMainButton: () => tg?.MainButton.show(),
        hideMainButton: () => tg?.MainButton.hide(),
        setMainButtonText: (text: string) => tg?.MainButton.setText(text),
        onMainButtonClick: (cb: () => void) => tg?.MainButton.onClick(cb),
    };
}
