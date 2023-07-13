import CategoriesPage from '../../components/templates/CategoriesPage'

export default function Categories({data}) {
  console.log(data);

  return (
    <div>
      <CategoriesPage data={data}/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const { query: { difficulty, time } } = context;

  const res = await fetch('http://localhost:4000/data')
  const data = await res.json()


  const filterdData = data.filter(item => {

    // in avali baray in hast ke hatman vojod dashte bashe 
    const difficultyResult = item.details.filter(detail=> detail.Difficulty && detail.Difficulty === difficulty)

    // inja bayad to return bokoni chon mireh to chand khat
    const timeResult=item.details.filter(detail=>{
      // chon az bala dareh filter mizaneh khob on ha ke nistan pas gofti ""
      const cookingTime= detail["Cooking Time"] || "";
      const [timeDetail]= cookingTime.split(' ');

      if(time === "less"&& timeDetail && +timeDetail <= 30){

        // khorhi in ha ye object ba cookingtime hast
        return detail
      }else if(time === 'more'&& +timeDetail > 30){
        return detail
      }
    })

    if(time, difficulty && timeResult.length&& difficultyResult.length){
      return item
    } else if(!time && difficulty && difficultyResult.length){
      return item
    }else if(time && !difficulty&& timeResult.length){
      return item
    }
  })

  return {
    props: {
      data:filterdData
    }
  }
}


