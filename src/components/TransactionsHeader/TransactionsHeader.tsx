import { useState } from 'react';
import classes from './TransactionsHeader.module.scss';
import arrowBottomIcon from '/src/assets/icons/arrow-right-icon.svg';
import { createPortal } from 'react-dom';
import Filter from '../Filter/Filter';

const TransactionsHeader = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {isOpen && createPortal(<Filter setOpen={setOpen} />, document.getElementById('modal') as HTMLDivElement)}

            <div className={classes.header}>
                <span className={[classes.title, 'h3-semibold'].join(' ')}>История транзакций</span>
                <div onClick={() => setOpen(prev => !prev)} className={[classes.filter, 'h5-regular'].join(' ')}>
                    Фильтры
                    <div className={classes.icon}>
                        <img src={arrowBottomIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionsHeader;
