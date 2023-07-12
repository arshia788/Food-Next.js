import React from 'react'

export default function Details() {
  return (
    <div>Details</div>
  )
}

export async function getStaticPaths(){

    const res= await fetch('http://localhost:4000/data')
    const data= await res.json()
    const newData= data.slice(0, 4);
    const paths= newData.map(item=> ({params:{id:item.id.toString()}}) )

    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    
    const {params}= context
    console.log(params);
    
    const res= await fetch(`http://localhost:4000/data/${params.id}`)
    const data=  await res.json()
    console.log(data);

    return{
        props:{
            data
        },
    }
}

 