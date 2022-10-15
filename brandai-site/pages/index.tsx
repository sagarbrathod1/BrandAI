import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BrandAI from '../components/brandai'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brand AI | AI Generated Marketing
        </title>
        <meta name="description" content="Generate upbeat taglines for your product/brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandAI />
    </div>
  )
}

export default Home
