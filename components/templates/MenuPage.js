import Card from "../modules/Card";

export default function MenuPage({ data }) {

    return (
        <div className="my-8">
            <h2 className="font-bold border-b-4 
        border-orange-500 text-xl w-fit mb-4">Menu</h2>

            <ul className="grid grid-cols-12 gap-4">
                {
                    data.map(item => {
                        return (
                            <li 
                            key={item.id}
                            className="xs:col-span-12 md:col-span-6 lg:col-span-4">
                                <Card data={item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
