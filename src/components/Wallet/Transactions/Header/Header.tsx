import classes from './Header.module.scss';
import arrowBottomIcon from '/src/assets/icons/arrow-bottom-icon.svg';

const Header = () => {
    return (
        <div className={classes.header}>
            <span className={classes.title}>История транзакций</span>
            <div className={classes.filter}>
                Фильтры
                <img className={classes.icon} src={arrowBottomIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;
