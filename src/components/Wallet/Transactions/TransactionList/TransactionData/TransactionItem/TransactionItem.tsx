import { FC } from 'react';
import classes from './TransactionItem.module.scss';
import { ITransaction } from '../../TransactionList';

interface TransactionItemProps {
    transaction: ITransaction
}

const TransactionItem: FC<TransactionItemProps> = ({ transaction }) => {
    const isReplenishment = transaction.type === 'replenishment';

    return (
        <div className={classes.transaction}>
            <div className={classes['icon-wrapper']}>
                {
                    transaction.format === 'stars'
                        ? <img src="/src/assets/icons/yellow-star.svg" className={classes.icon} alt="" />
                        : transaction.format === 'toys' && <img src="/src/assets/icons/toy.svg" className={classes.icon} alt="" />
                }
            </div>

            <div className={classes.content}>
                <span className={classes.title}>
                    {isReplenishment ? 'Пополнение' : 'Вывод'}
                    <div className={classes.status}>
                        {transaction.status === 'success' && <img src="/src/assets/icons/green-mark.svg" className={classes.mark} alt="" />}
                        {transaction.status === 'waiting' && <img src="/src/assets/icons/waiting.svg" className={classes.mark} alt="" />}
                        {transaction.status === 'error' && <img src="/src/assets/icons/error.svg" className={classes.mark} alt="" />}
                    </div>
                </span>
                <span className={classes.time}>{transaction.time}</span>
            </div>

            <div className={[classes.price, transaction.status !== 'success' ? classes.white : isReplenishment ? classes.green : classes.red].join(' ')}>
                {isReplenishment ? '+ ' : '– '}
                {transaction.price.toLocaleString('ru-RU')}
                <img src={`/src/assets/icons/${transaction.status !== 'success' ? 'white' : isReplenishment ? 'green' : 'red'}-star.svg`} className={classes.star} alt="" />
            </div>
        </div>
    )
}

export default TransactionItem