import { useRouter } from 'next/router'
import React from 'react'

export default function Details() {

    const router= useRouter();

    if(router.isFallback){
        return <h2>Is-Loading...</h2>
    }
    return (
        <div></div>
    )
}

export async function getStaticPaths() {

    const res = await fetch('http://localhost:4000/data')
    const data = await res.json()
    const newData = data.slice(0, 4);
    const paths = newData.map(item => ({ params: { id: item.id.toString() } }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context
    console.log(params);

    const res = await fetch(`http://localhost:4000/data/${params.id}`)
    const data = await res.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        },
    }
}

