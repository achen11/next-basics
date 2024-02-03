import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import fs from 'fs';
import path from 'path';

export default function Photography({ photos }) {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>{photos.color} {photos.id}</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {id}
                </h1>

                <img src={photos.image} width="300px" />

            </main>
        </div>
    )
}


// export async function getServerSideProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     }
// }

export async function getStaticProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { photos: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch('http://localhost:3000/photos.json');
    const data = await req.json();

    const paths = data.map(photos => {
        return { params: { id: photos } }
    })

    return {
        paths,
        fallback: false
    };
}
