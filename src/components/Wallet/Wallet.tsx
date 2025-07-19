import Balance from '../Balance/Balance';
import TransactionsBlock from '../TransactionsBlock/TransactionsBlock';
import classes from './Wallet.module.scss';

const Wallet = () => {

    return (
        <div className={classes.container}>
            <Balance />
            <TransactionsBlock />
        </div>
    )
}

export default Wallet