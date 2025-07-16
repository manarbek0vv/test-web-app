import { FC } from 'react';
import classes from './TransactionItem.module.scss';
import { ITransaction } from '../../TransactionList';

import yellowStar from '/src/assets/icons/yellow-star.svg';
import toy from '/src/assets/icons/toy.svg';
import greenMark from '/src/assets/icons/green-mark.svg';
import waiting from '/src/assets/icons/waiting.svg';
import error from '/src/assets/icons/error.svg';
import greenStar from '/src/assets/icons/green-star.svg';
import redStar from '/src/assets/icons/red-star.svg';
import whiteStar from '/src/assets/icons/white-star.svg';

interface TransactionItemProps {
    transaction: ITransaction;
}

const TransactionItem: FC<TransactionItemProps> = ({ transaction }) => {
    const isReplenishment = transaction.type === 'replenishment';

    return (
        <div className={classes.transaction}>
            <div className={classes['icon-wrapper']}>
                {transaction.format === 'stars' ? (
                    <img src={yellowStar} className={classes.icon} alt="" />
                ) : transaction.format === 'toys' ? (
                    <img src={toy} className={classes.icon} alt="" />
                ) : null}
            </div>

            <div className={classes.content}>
                <span className={classes.title}>
                    {isReplenishment ? 'Пополнение' : 'Вывод'}
                    <div className={classes.status}>
                        {transaction.status === 'success' && (
                            <img src={greenMark} className={classes.mark} alt="" />
                        )}
                        {transaction.status === 'waiting' && (
                            <img src={waiting} className={classes.mark} alt="" />
                        )}
                        {transaction.status === 'error' && (
                            <img src={error} className={classes.mark} alt="" />
                        )}
                    </div>
                </span>
                <span className={classes.time}>{transaction.time}</span>
            </div>

            <div
                className={[
                    classes.price,
                    transaction.status !== 'success'
                        ? classes.white
                        : isReplenishment
                            ? classes.green
                            : classes.red,
                ].join(' ')}
            >
                {isReplenishment ? '+ ' : '– '}
                {transaction.price.toLocaleString('ru-RU')}
                <img
                    src={
                        transaction.status !== 'success'
                            ? whiteStar
                            : isReplenishment
                                ? greenStar
                                : redStar
                    }
                    className={classes.star}
                    alt=""
                />
            </div>
        </div>
    );
};

export default TransactionItem;
