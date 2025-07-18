import { FC } from 'react';
import classes from './Container.module.scss';
import { useSafeArea } from '../hooks/useSafeArea';
import { useContentArea } from '../hooks/useContentArea';
// import TransactionLoader from '../TransactionLoader/TransactionLoader';

interface ContainerProps {
    children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    const { top: safeTop } = useSafeArea();
    const { top: contentTop } = useContentArea();
    const safeTopPadding = `${16 + safeTop + contentTop}px`

    return (
        <div style={{ paddingTop: safeTopPadding }} className={classes.container}>
            {/* <TransactionLoader /> */}
            {children}
        </div>
    )
}

export default Container