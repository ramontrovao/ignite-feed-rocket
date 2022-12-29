import styles from "./Post.module.scss"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar hasBorder={true} src="https://github.com/ramontrovao.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Ramon Pinheiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                title="28 de dezembro às 10:07"
                dateTime="2022-05-11 08:13:30">Publicado há uma hora</time>
            </header>

            <div className={styles.content}>
                <p>Oi gente, tudo bem? Por favor escutem EDEN.</p>

                <p>EDEN é um artista muito bom, porém ele não é muito reconhecido. Gostaria que vocês dessem uma chance e escutassem algumas músicas dele. Obrigado pela atenção!</p>

                <a href="https://www.youtube.com/watch?v=E0FfQsK9ExQ&list=OLAK5uy_lFJjeLAtmFNU78u8q7ZpGOY-FzdylObAg">Veja o album vertigo</a>

                <p><a href="#">#music #art #eden</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                  placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment avatarSrc="https://github.com/guicastro13.png"/>
                <Comment avatarSrc="https://github.com/levieber.png"/>
                <Comment avatarSrc="https://github.com/vinybergamo.png"/>
                <Comment avatarSrc="https://github.com/douglasfdev.png"/>
            </div>
        </article>
    )
}