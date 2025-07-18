import classes from './Balance.module.scss';
import plusIcon from '/src/assets/icons/plus-icon.svg';
import minusIcon from '/src/assets/icons/minus-icon.svg';
import bigStar from '/src/assets/icons/big-yellow-star.svg';

const Balance = () => {

    return (
        <div className={classes.balance}>
            <div className={classes.content}>
                <span className={[classes['balance-text'], 'h5-regular'].join(' ')}>Ваш баланс</span>
                <span className={classes['balance-count']}>
                    {4212..toLocaleString('ru-RU')}
                    <img src={bigStar} className={classes.star} alt="" />
                </span>
                <div className={classes.buttons}>
                    <div className={[classes.button, classes.yellow].join(' ')}>
                        <img className={classes.icon} src={plusIcon} alt="+" />
                        <span className={[classes.wrapper, 'h4-medium'].join(' ')}>Пополнить</span>
                    </div>
                    <button className={[classes.button, classes.gray].join(' ')}>
                        <img className={classes.icon} src={minusIcon} alt="-" />
                        <span className={[classes.wrapper, 'h4-medium'].join(' ')}>Вывод</span>
                    </button>
                </div>
            </div>

            <img src="/images/gift.svg" className={classes.gift} alt="" />
        </div>
    )
}

export default Balance