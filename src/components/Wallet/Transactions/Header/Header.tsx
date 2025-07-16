import classes from './Header.module.scss';

const Header = () => {

    return (
        <div className={classes.header}>
            <span className={classes.title}>История транзакций</span>
            <div className={classes.filter}>
                Фильтры
                <img className={classes.icon} src="/src/assets/icons/arrow-bottom-icon.svg" alt="" />
            </div>
        </div>
    )
}

export default Header