import styles from "./Header.module.scss"
import IgniteLogo from "../assets/ignite-logo.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logotipo do curso Ignite da Rocketseat" />
        </header>
    )
}