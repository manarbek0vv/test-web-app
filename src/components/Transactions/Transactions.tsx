import TransactionsHeader from '../TransactionsHeader/TransactionsHeader';
import TransactionList from '../TransactionList/TransactionList';
import classes from './Transactions.module.scss';

const TransactionsBlock = () => {

    return (
        <div className={classes.transactions}>
            <TransactionsHeader />

            <TransactionList />
        </div>
    )
}

export default TransactionsBlock