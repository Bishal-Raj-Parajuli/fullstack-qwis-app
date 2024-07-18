
interface Props{
    cardDetail :{
        id: number
        category: string
        blitzTime: number
    } 
}


export default function CategoryCard({cardDetail}: Props) {
  return (
    <div key={cardDetail.id} className="p-6 w-64 flex flex-col items-center bg-secondary rounded-lg shadow-md flex-shrink-0">
        <div className=" flex flex-col items-center mb-4">
            <span className="text-2xl mr-2">🚀</span>
            <h2 className="text-xl font-bold">{cardDetail.category}</h2>
        </div>
        <p className="text-white">
            Blitz Time: {cardDetail.blitzTime} min
        </p>
    </div>  
  )
}
