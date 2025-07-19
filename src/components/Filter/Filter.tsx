import { FC, useRef, useState } from 'react';
import classes from './Filter.module.scss';
import glass from '/src/assets/icons/glass.svg';
import close from '/src/assets/icons/x-icon.svg';
import { useFoldingGesture } from '../hooks/useFolding';
import { CSSTransition } from 'react-transition-group';
import './Filter.transition.scss';
import FilterList from '../FilterList/FilterList';

const filters = ['Пополнение', 'Вывод', 'Ставка в игре', "Выплата за игру", 'Комиссия', 'Транзакция отменена', 'Реферальная система', 'Промокод'];

interface FilterProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Filter: FC<FilterProps> = ({ isOpen, setOpen }) => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const screenRef = useRef(null)

    const { translateY, isDragging, handleStart } = useFoldingGesture(100, () => setOpen(false));

    const searchedFilters = filters.filter(item => item.includes(value));

    return (
        <CSSTransition
            classNames="backdrop"
            nodeRef={screenRef}
            in={isOpen}
            timeout={300}
            mountOnEnter
            unmountOnExit>
            <div ref={screenRef} className={classes.screen}>
                <div className='filter-wrapper'>
                    <div
                        style={{
                            transform: `translateY(${translateY}px)`,
                            transition: !isDragging.current ? 'transform 200ms ease-out' : ''
                        }}
                        className={classes.container}
                    >
                        <div className={classes.header}>
                            <div className={classes.slider}>
                                <div
                                    className={classes.use}
                                    onTouchStart={handleStart}
                                    onMouseDown={handleStart}
                                />
                            </div>
                            <span className={[classes.title, 'h3-medium'].join(' ')}>Фильтры</span>
                            <img
                                onClick={() => setOpen(prev => !prev)}
                                src={close}
                                className={classes.close} alt="" />
                        </div>

                        <div className={classes.search}>
                            <div className={classes['glass-wrapper']}>
                                <img src={glass} className={classes.glass} alt="" />
                            </div>
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                id='filter'
                                placeholder='Поиск'
                                className={[classes.input, 'h4-regular'].join(' ')}
                            />
                        </div>

                        <FilterList
                            activeFilters={activeFilters}
                            searchedFilters={searchedFilters}
                            setActiveFilters={setActiveFilters} />

                        <div className={classes.buttons}>
                            <div
                                onClick={() => setActiveFilters([])}
                                className={[classes.button, classes.gray, 'h4-semibold'].join(' ')}>
                                Clear all
                            </div>
                            <div className={[classes.button, classes.yellow, 'h4-semibold'].join(' ')}>
                                Use filters ({activeFilters.length})
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Filter