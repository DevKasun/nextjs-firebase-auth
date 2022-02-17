import Head from 'next/head'
import Image from 'next/image'

import NavBar from './../components/NavBar/NavBar';
import Signup from './../components/Signup/Signup';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.main_wrapper}>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Signup />
      </main>
    </div>
  )
}
