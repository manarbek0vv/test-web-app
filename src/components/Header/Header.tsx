import { useState } from 'react';
import classes from './Header.module.scss';
import arrowBottomIcon from '/src/assets/icons/arrow-bottom-icon.svg';
import { createPortal } from 'react-dom';
import Filter from '../Filter/Filter';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {isOpen && createPortal(<Filter setOpen={setOpen} />, document.getElementById('modal') as HTMLDivElement)}

            <div className={classes.header}>
                <span className={classes.title}>История транзакций</span>
                <div onClick={() => setOpen(prev => !prev)} className={classes.filter}>
                    Фильтры
                    <img className={classes.icon} src={arrowBottomIcon} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
