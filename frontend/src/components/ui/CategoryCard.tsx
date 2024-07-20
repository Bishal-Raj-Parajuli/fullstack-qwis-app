import { Link } from "react-router-dom"
import { ICategory } from "../../types"

interface Props{
    cardDetail : ICategory
}


export default function CategoryCard({cardDetail}: Props) {
  return (
    <Link to={`/categories/${cardDetail.id}`} >
        <div key={cardDetail.id} className="p-6 w-64 flex flex-col items-center  bg-background text-black border-2 border-accent rounded-lg shadow-md flex-shrink-0">
        <div className=" flex flex-col items-center mb-4">
            <h2 className="text-xl font-bold">#{cardDetail.category}</h2>
        </div>
        <p className="">
            Blitz Time: {cardDetail.blitzTime} min
        </p>
    </div>
    </Link>
      
  )
}
