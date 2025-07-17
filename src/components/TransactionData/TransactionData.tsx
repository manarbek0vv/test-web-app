import { FC } from 'react';
import { ITestData } from '../TransactionList/TransactionList';
import classes from './TransactionData.module.scss';
import TransactionItem from '../TransactionItem/TransactionItem';

interface TransactionDataProps {
    data: ITestData;
}

const TransactionData: FC<TransactionDataProps> = ({ data }) => {

    return (
        <div className={classes.data}>
            <span className={classes.title}>{data.date}</span>
            <div className={classes.list}>
                {
                    data.transactions.map(transaction =>
                        <TransactionItem key={transaction.time} transaction={transaction} />
                    )
                }
            </div>
        </div>
    )
}

export default TransactionData