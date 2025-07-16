import Balance from './Balance/Balance';
import Transactions from './Transactions/Transactions';
import classes from './Wallet.module.scss';

const Wallet = () => {

    return (
        <div className={classes.container}>
            <Balance />

            <Transactions />
        </div>
    )
}

export default Wallet