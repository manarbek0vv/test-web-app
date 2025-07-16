import { useState } from 'react';
import classes from './Filter.module.scss';

const filters = ['Пополнение', 'Вывод', 'Ставка в игре', "Выплата за игру", 'Комиссия', 'Транзакция отменена', 'Реферальная система', 'Промокод'];

const Filter = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [value, setValue] = useState('');

    const changeActive = (val: string) => {
        const isExists = activeFilters.includes(val);
        if (isExists) setActiveFilters(prev => prev.filter(i => i !== val));
        else setActiveFilters(prev => [...prev, val]);
    }

    const searchedFilters = filters.filter(item => item.includes(value));

    return (
        <div className={classes.screen}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <span className={classes.title}>Фильтры</span>
                    <img onClick={() => setOpen(prev => !prev)} src="/src/assets/icons/x-icon.svg" className={classes.close} alt="" />
                </div>

                <div className={classes.search}>
                    <div className={classes['glass-wrapper']}>
                        <img src="/src/assets/icons/glass.svg" className={classes.glass} alt="" />
                    </div>
                    <input value={value} onChange={(e) => setValue(e.target.value)} id='filter' placeholder='Поиск' className={classes.input} />
                </div>

                <div className={classes.list}>
                    {searchedFilters.map(item => {
                        const isActive = activeFilters.includes(item);

                        return <label className={classes.filter}>
                            <div className={[classes.checkbox, isActive && classes.active].join(' ')}>
                                {isActive && <img src="/src/assets/icons/checkbox-mark.svg" alt="" />}
                                <input onChange={() => changeActive(item)} checked={isActive} type="checkbox" className={classes['input']} />
                            </div>

                            <span className={classes.desc}>{item}</span>
                        </label>
                    }
                    )}
                </div>

                <div className={classes.buttons}>
                    <div className={[classes.button, classes.gray].join(' ')}>Clear all</div>
                    <div className={[classes.button, classes.yellow].join(' ')}>Use filters (n)</div>
                </div>
            </div>
        </div>
    )
}

export default Filter