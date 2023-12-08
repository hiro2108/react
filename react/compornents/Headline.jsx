import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Headline.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Headline(props) {
    return (
        <>
            <div className={styles.description}>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
            <div className={styles.center}>
                <h1>{props.title}</h1>
            </div>
        </>
    )
}
