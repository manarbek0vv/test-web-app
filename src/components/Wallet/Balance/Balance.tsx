import classes from './Balance.module.scss';

const Balance = () => {

    return (
        <div className={classes.balance}>
            <div className={classes.content}>
                <span className={classes['balance-text']}>Ваш баланс</span>
                <span className={classes['balance-count']}>
                    {4212..toLocaleString('ru-RU')}
                    <img src="/src/assets/icons/big-yellow-star.svg" className={classes.star} alt="" />
                </span>
                <div className={classes.buttons}>
                    <div className={[classes.button, classes.yellow].join(' ')}>
                        <img className={classes.icon} src="/src/assets/icons/plus-icon.svg" alt="+" />
                        <span className={classes.wrapper}>Пополнить</span>
                    </div>
                    <button className={[classes.button, classes.gray].join(' ')}>
                        <img className={classes.icon} src="/src/assets/icons/minus-icon.svg" alt="-" />
                        <span className={classes.wrapper}>Вывод</span>
                    </button>
                </div>
            </div>

            <img src="/images/gift.svg" className={classes.gift} alt="" />
        </div>
    )
}

export default Balance