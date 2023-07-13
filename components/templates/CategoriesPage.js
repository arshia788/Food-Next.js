
export default function CategoriesPage() {
  return (
    <div className="my-8">
        <h2 
        className="font-bold text-xl border-b-2 border-green-500 w-fit"
        >Categories</h2>

        <div className="mt-8">
            <div className="flex items-center justify-between">
                <select className="rounded  text-green-500 p-1
                
                ">
                    <option>Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                <select className="rounded  text-green-500 p-1">
                    <option>Cooking Time</option>
                    <option>More than 30min</option>
                    <option>Less tan 30min</option>

                </select>

                <button 
                className="bg-green-500 text-white rounded px-4 py-1"
                >Search</button>
            </div>
        </div>

    </div>
  )
}

 