import { FC } from "react";
import classes from './FilterList.module.scss';
import checkboxMark from '/src/assets/icons/checkbox-mark.svg';

interface FilterListProps {
    searchedFilters: string[];
    activeFilters: string[];
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const FilterList: FC<FilterListProps> = ({
    searchedFilters,
    activeFilters,
    setActiveFilters
}) => {

    const changeActive = (val: string) => {
        const isExists = activeFilters.includes(val);
        if (isExists) setActiveFilters(prev => prev.filter(i => i !== val));
        else setActiveFilters(prev => [...prev, val]);
    }

    return (
        <div className={classes.list}>
            {searchedFilters.map(item => {
                const isActive = activeFilters.includes(item);

                return <label key={item} className={classes.filter}>
                    <div className={[classes.checkbox, isActive && classes.active].join(' ')}>

                        {isActive && <img src={checkboxMark} alt="" />}

                        <input
                            onChange={() => changeActive(item)}
                            checked={isActive}
                            type="checkbox"
                            className={classes['input']}
                        />
                    </div>

                    <span className={[classes.desc, 'h4-regular'].join(' ')}>{item}</span>
                </label>
            }
            )}
        </div>
    )
}

export default FilterList