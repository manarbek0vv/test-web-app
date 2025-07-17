import TransactionData from '../TransactionData/TransactionData';
import classes from './TransactionList.module.scss';

export type ITransaction = {
    format: string;
    type: string;
    status: string;
    time: string;
    price: number;
}

export type ITestData = {
    date: string;
    transactions: ITransaction[];
}

const testData: ITestData[] = [
    {
        date: 'Сегодня',
        transactions: [
            { format: 'stars', type: 'replenishment', status: 'success', time: '12:41', price: 3539 },
            { format: 'toys', type: 'replenishment', status: 'success', time: '10:28', price: 4324 },
        ]
    },
    {
        date: '26 июня',
        transactions: [
            { format: 'stars', type: 'withdraw', status: 'success', time: '17:32', price: 13539 },
            { format: 'toys', type: 'withdraw', status: 'success', time: '11:21', price: 324324 },
            { format: 'toys', type: 'withdraw', status: 'waiting', time: '9:23', price: 1332324 },
            { format: 'toys', type: 'withdraw', status: 'error', time: '6:51', price: 1332324 },
        ]
    }
]

const TransactionList = () => {

    return (
        <div className={classes['transactions-container']}>
            {
                testData.map(data =>
                    <TransactionData data={data} />
                )
            }
        </div>
    )
}

export default TransactionList