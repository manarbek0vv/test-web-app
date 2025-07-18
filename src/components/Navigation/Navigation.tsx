import classes from './Navigation.module.scss';
import { createPortal } from "react-dom"
// @ts-ignore
import CrushIcon from '/src/assets/icons/crush-icon.svg?react';
// @ts-ignore
import JackpotIcon from '/src/assets/icons/jackpot-icon.svg?react';
// @ts-ignore
import InventoryIcon from '/src/assets/icons/inventory-icon.svg?react';
// @ts-ignore
import ProfileIcon from '/src/assets/icons/profile-icon.svg?react'

const navigationItems = [
    { title: 'Crush', Icon: CrushIcon },
    { title: 'Jackpot', Icon: JackpotIcon },
    { title: 'Inventory', Icon: InventoryIcon },
    { title: 'Profile', Icon: ProfileIcon },
]

const Navigation = () => {
    const navHeight = `${Telegram.WebApp.safeAreaInset.bottom > 0 ? 86 : 65}px`
    return (
        createPortal(
            <div className={classes.wrapper}>
                <div style={{height: navHeight}} className={classes.container}>
                    {navigationItems.map(({ title, Icon }) =>
                        <div key={title} className={classes.item}>
                            <div className={classes['icon-wrapper']}>
                                <Icon />
                            </div>
                            <span className={classes.title}>{title}</span>
                        </div>
                    )}
                </div>
            </div>,
            document.getElementById('modal') as HTMLDivElement
        )
    )
}

export default Navigation