import { FC } from 'react';
import classes from './Container.module.scss';
import Navigation from '../Navigation/Navigation';

interface ContainerProps {
    children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {

    return (
        <>
            <div className={classes.container}>
                {children}
            </div>

            <Navigation />
        </>
    )
}

export default Container