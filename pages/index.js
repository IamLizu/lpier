import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fetch from '../components/Fetch'
import { useState, useEffect } from 'react'
import Render from '../components/Render'
import { annotate } from 'rough-notation'

export default function Home() {

  const [state, setState] = useState('initial')
  const [meta, setMeta] = useState({})

  useEffect(() => {
    document.body.style.zoom = "125%";
    const e = document.getElementById('appHeader');
    const annotation = annotate(e, { type: 'highlight', color: '#fff176' });
    annotation.show();
  }, [])

  const update = ( data, s ) => {
    setMeta(data)
    setState(s)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>lpier | Next.js implementation of harpies</title>
        <meta property="og:url"                content="https://lpier.iamlizu.com/" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="lpier | Next.js implementation of harpies" />
        <meta property="og:description"        content="Helps you generating link previews on the fly!" />
        <meta property="og:image"              content="https://user-images.githubusercontent.com/26184316/88770455-abc45f00-d19f-11ea-9e9c-8de29cfd7dda.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IamLizu" />
        <meta name="twitter:creator" content="@IamLizu" />
        <meta name="twitter:title" content="lpier | Next.js implementation of harpies"  />
        <meta name="twitter:description" content="Helps you generating link previews on the fly!" />
        <meta name="twitter:image" content="https://user-images.githubusercontent.com/26184316/88770455-abc45f00-d19f-11ea-9e9c-8de29cfd7dda.png" />
        <link rel="canonical" href="https://lpier.iamlizu.com/" />
      </Head>

      <main className={styles.main}>
        <h2 id="appHeader">lpier</h2>
        <br></br>

        <Fetch state={state} update={update}/>
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
        <p>Next.js implementation of <a
          href="https://pypi.org/project/harpies/"
          target="_blank"
          rel="noopener noreferrer"
        > harpies
        </a></p>
      </footer>
    </div>
  )
}
