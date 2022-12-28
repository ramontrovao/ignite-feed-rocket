import styles from "./Sidebar.module.scss"

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <strong>Ramon Pinheiro</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">Editar o seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}