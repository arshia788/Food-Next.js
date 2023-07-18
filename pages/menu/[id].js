import { useRouter } from 'next/router'
import React from 'react'
import DetailsPage from '../../components/templates/DetailsPage';

export default function Details({data}) {

    const router= useRouter();

    if(router.isFallback){
        return <h2>Is-Loading...</h2>
    }
    return (
        <div>
            <DetailsPage data={data}/>
        </div>
    )
}

export async function getStaticPaths() {

    const res = await fetch (`${process.env.BASE_URL}/data`)
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

    const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`)
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
        revalidate:+process.env.REVALIDATE

    }
}

