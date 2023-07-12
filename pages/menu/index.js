import MenuPage from '../../components/templates/MenuPage'

export default function Menu({data}) {
  return (
    <div>
        <MenuPage data={data}/>
    </div>
  )
}


// ! first you should get it inside the pages folder(note.)
export async function getStaticProps(){

    // ? this is the way to get the data with json-server
    const res= await fetch('http://localhost:4000/data')
    const data= await res.json()

    return{
        props:{
            data
        }, 
        revalidate:10,
    }
}
