import React, { FC } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'


export const MainLayout: FC = ({ children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Elias</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <NavBar />
            <main className={styles.main}>
            
                { children }
        
            </main>
    
        </div>
      )
}
