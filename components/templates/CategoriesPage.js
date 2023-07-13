import { useRouter } from "next/router"
import { useState } from "react"

export default function CategoriesPage() {

    const router= useRouter();
    const [query, setQuery]= useState({
        difficulty:'', time:''
    })

    const changeHandler=(event)=>{
        setQuery({...query, [event.target.name]:event.target.value})
    }

    const searchHandler=()=>{
        router.push(

            {pathname:'/categories', query}
        )
    }

    return (
        <div className="my-8">
            <h2
                className="font-bold text-xl border-b-2 border-green-500 w-fit"
            >Categories</h2>

            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <select 
                    value={query.difficulty}
                    name="difficulty"
                    onChange={changeHandler}
                    className="rounded  text-green-500 p-1">
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>

                    <select 
                    value={query.time}
                    name="time"
                    onChange={changeHandler}
                    className="rounded  text-green-500 p-1">
                        <option value="">Cooking Time</option>
                        <option value="more">More than 30min</option>
                        <option value="less">Less tan 30min</option>

                    </select>

                    <button
                        onClick={searchHandler}
                        className="bg-green-500 text-white rounded px-4 py-1"
                    >Search</button>
                </div>
            </div>

        </div>
    )
}

