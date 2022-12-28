import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from "./App.module.scss"
import './global.scss'

const  App = () => {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </div>
  )
}

export default App
