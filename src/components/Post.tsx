import styles from "./Post.module.scss"
import { useState } from "react"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

interface PostProps {
    author: {avatar_url: string, name: string, role: string},
    publishedAt: Date
    content: Array<{ type: string, content: string, }>,
}

export const Post = ({ author, publishedAt, content }:PostProps) => {
    const [comments, setComments] = useState<Array<string>>([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = (event: any) => {
        event.preventDefault()
        
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = (event: any) => {
        setNewCommentText(event.target.value)
    }

    const deleteComment = (comment:string) => {
        console.log(`Deletar comentário ${comment}`)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar hasBorder={true} src={author.avatar_url}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                title={publishedDateFormated}
                dateTime={publishedAt.toISOString()}>{publishedAtRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => line.type === 'paragraph' ?  <p key={line.content}>{line.content}</p> : 
                <p key={line.content}><a href="#">{line.content}</a></p>)}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                  placeholder="Deixe um comentário"
                  onChange={handleNewCommentChange}
                  value={newCommentText}
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment content={comment} avatarSrc="https://github.com/ramontrovao.png" onDeleteComment={deleteComment} key={comment} />
                ))}
            </div>
        </article>
    )
}