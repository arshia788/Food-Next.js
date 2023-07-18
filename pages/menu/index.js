import MenuPage from '../../components/templates/MenuPage'

export default function Menu({data}) {
  return (
    <div>
        <MenuPage data={data}/>
    </div>
  )
}


export async function getStaticProps(){

    const res= await fetch(`${process.env.BASE_URL}/data`)
    const data= await res.json()

    return{
        props:{
            data
        }, 

        // chon string hast change kardi be number
        revalidate:+process.env.REVALIDATE
    }
}
