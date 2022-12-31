import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.scss"

interface commentProps {
    avatarSrc: string
    content: string
    onDeleteComment: Function
}

export const Comment = ({ avatarSrc, content, onDeleteComment }: commentProps) => {
    const [likeCount, setLikeCount] = useState(0)

    const handleLikeComment = () => {
        setLikeCount(prev => prev + 1)
    }

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    return(
        <section className={styles.comment}>
            <Avatar hasBorder={false} src={avatarSrc}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ramon Pinheiro</strong>

                            <time title="28 de dezembro às 10:07" dateTime="2022-05-11 08:13:30">Cerca de uma hora atrás</time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </section>
    )
}