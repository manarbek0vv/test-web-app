// import classes from './Navigation.module.scss';
// import { createPortal } from "react-dom"
// import CrushIcon from '/src/assets/icons/crush-icon.svg';
// import JackpotIcon from '/src/assets/icons/jackpot-icon.svg';
// import InventoryIcon from '/src/assets/icons/inventory-icon.svg';
// import ProfileIcon from '/src/assets/icons/profile-icon.svg'
// import { useState } from 'react';

// const navigationItems = [
//     { title: 'Crush', icon: CrushIcon },
//     { title: 'Jackpot', icon: JackpotIcon },
//     { title: 'Inventory', icon: InventoryIcon },
//     { title: 'Profile', icon: ProfileIcon },
// ]

// const Navigation = () => {
//     const [active, setActive] = useState(navigationItems[2].title);

//     return (
//         createPortal(
//             <div className={classes.wrapper}>
//                 <div className={classes.container}>
//                     {navigationItems.map(({ title, icon }) =>
//                         <div className={[classes.item, active === title && classes.active].join(' ')}>
//                             <div className={classes['icon-wrapper']}>
//                                 <img src={icon} />
//                             </div>
//                             <span className={classes.title}>{title}</span>
//                         </div>
//                     )}
//                 </div>
//             </div>,
//             document.getElementById('modal') as HTMLDivElement
//         )
//     )
// }

// export default Navigation

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
import { useState } from 'react';

const navigationItems = [
    { title: 'Crush', Icon: CrushIcon },
    { title: 'Jackpot', Icon: JackpotIcon },
    { title: 'Inventory', Icon: InventoryIcon },
    { title: 'Profile', Icon: ProfileIcon },
]

const Navigation = () => {
    const [active, setActive] = useState(navigationItems[0].title);

    return (
        createPortal(
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    {navigationItems.map(({ title, Icon }) =>
                        <div onClick={() => setActive(title)} className={[classes.item, active === title && classes.active].join(' ')}>
                            <div className={classes['icon-wrapper']}>
                                {/* <img src={icon} /> */}
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