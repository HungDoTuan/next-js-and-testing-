import styles from "./layout.module.css"

export default function Layout ({ children }) {
    return <h1 className={styles.container}>{children}</h1>
}