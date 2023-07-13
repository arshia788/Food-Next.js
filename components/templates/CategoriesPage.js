import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Card from '../modules/Card';

export default function CategoriesPage({ data }) {

    const router = useRouter();
    const [query, setQuery] = useState({
        difficulty: '', time: ''
    })

    const changeHandler = (event) => {
        setQuery({ ...query, [event.target.name]: event.target.value })
    }


    useEffect(() => {
        const { difficulty, time } = router.query

        // injori omadi update kardi on select ha ro 
        // yani query ke to url hast ba query to select farght dashte bashe bia in haii ke az query greftim ro bezar be jay on ha 
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time })
        }
    }, [])

    const searchHandler = () => {
        router.push(
            { pathname: '/categories', query }
        )
    }

    return (
        <div className="my-8">

            <h2
                className="font-bold text-xl border-b-2 border-green-500 w-fit"
            >Categories</h2>

            <div className="my-8">
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
                        <option value="less">Less than 30min</option>

                    </select>

                    <button
                        onClick={searchHandler}
                        className="bg-green-500 text-white rounded px-4 py-1"
                    >Search</button>
                </div>
            </div>



            <div className="grid grid-cols-12 gap-4">
                {
                    data.map(item => {
                        return (
                            <div
                                className="xs:col-span-12 sm:col-span-6 md:col-span-4"
                            >
                                <Card data={item} />
                            </div>
                        )
                    })
                }
            </div>

            {!data.length ?
                <img
                    className="w-3/6 mx-auto"
                    src='/images/search.png' alt="category" /> : null}



        </div>
    )
}

