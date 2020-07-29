// import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fetch from '../components/Fetch'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Fetch />
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
