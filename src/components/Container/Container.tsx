import { FC } from 'react';
import classes from './Container.module.scss';
// import TransactionLoader from '../TransactionLoader/TransactionLoader';

interface ContainerProps {
    children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {

    return (
        <div className={classes.container}>
            {/* <TransactionLoader /> */}
            {children}
        </div>
    )
}

export default Container