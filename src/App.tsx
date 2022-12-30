import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from "./App.module.scss"
import './global.scss'

interface PostAttributes {
    id: number,
    author: {avatar_url: string, name: string, role: string},
    content: Array<{ type: string, content: string, }>,
    publishedAt: any
}

const posts: Array<PostAttributes> = [
  {
      id: 1,
      author: {
          avatar_url: 'https://github.com/ramontrovao.png',
          name: 'Ramon Pinheiro',
          role: 'Web Developer',
      },
      content: [
          {type: 'paragraph', content: 'Oi gente, tudo bem? Por favor escutem EDEN.'},
          {type: 'paragraph', content: 'EDEN é um artista muito bom, porém ele não é muito reconhecido. Gostaria que vocês dessem uma chance e escutassem algumas músicas dele. Obrigado pela atenção!'},
          {type: 'link', content: 'escute eden aqui'}
      ],
      publishedAt: new Date('2022-12-29 11:00:00')
  },
  {
    id: 2,
    author: {
        avatar_url: 'https://github.com/levieber.png',
        name: 'Levi Eber',
        role: 'Web Developer',
    },
    content: [
        {type: 'paragraph', content: 'Oi gente, tudo bem? Por favor escutem EDEN.'},
        {type: 'paragraph', content: 'EDEN é um artista muito bom, porém ele não é muito reconhecido. Gostaria que vocês dessem uma chance e escutassem algumas músicas dele. Obrigado pela atenção!'},
        {type: 'link', content: 'escute eden aqui'}
    ],
    publishedAt: new Date('2022-12-24 11:00:00')
}
]

const  App = () => {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
              <Post 
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
                key={post.id}
              />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
