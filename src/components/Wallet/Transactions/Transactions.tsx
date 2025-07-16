import Header from './Header/Header';
import TransactionList from './TransactionList/TransactionList';
import classes from './Transactions.module.scss';

const Transactions = () => {

    return (
        <div className={classes.transactions}>
            <Header />

            <TransactionList />
        </div>
    )
}

export default Transactions