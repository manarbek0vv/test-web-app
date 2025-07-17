import classes from './TransactionLoader.module.scss';

const TransactionLoader = () => {

    return (
        <div className={classes.container}>
            <div className={classes.loader}></div>
            <span className={classes.title}>Загружаем транзакции...</span>
        </div>
    )
}

export default TransactionLoader