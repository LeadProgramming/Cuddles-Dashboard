import styles from './layout.module.css';
type Children = {
    children: React.ReactNode;
};

export default function Layout({ children }: Children): React.ReactNode {
    return <div className={styles.container}>{children}</div>;
}
