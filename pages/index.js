import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fetch from '../components/Fetch'
import { useState } from 'react'
import Render from '../components/Render'

export default function Home() {

  const [state, setState] = useState('initial')
  const [meta, setMeta] = useState({})

  const update = ( data, s ) => {
    setMeta(data)
    setState(s)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>lpier | Next.js implementation of harpies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Fetch state={state} update={update}/>
        {console.log(meta)}
        <Render state={state} data={meta} update={update}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://iamlizu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by{' '}
          <img src="https://iamlizu.com/favicon.ico" alt="S M Mahmudul Hasan" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
