import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.scss"

interface avatarProps {
    avatarSrc: string
}

export const Comment = (props: avatarProps) => {
    return(
        <section className={styles.comment}>
            <Avatar hasBorder={false} src={props.avatarSrc}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ramon Pinheiro</strong>

                            <time title="28 de dezembro às 10:07" dateTime="2022-05-11 08:13:30">Cerca de uma hora atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash/>
                        </button>
                    </header>

                    <p>Curti o post, EDEN é brabo mesmo.</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp /> Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </section>
    )
}