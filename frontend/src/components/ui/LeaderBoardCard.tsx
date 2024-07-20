import { IUser } from "../../types"


interface Props{
  "user" : IUser
  "rank": number
}

export default function LeaderBoardCard({user, rank}: Props) {
  return (
    <div className="py-1 px-4 flex justify-between items-center text-accent bg-background border-accent border rounded-lg shadow-md flex-shrink-0">
        <span className="inline-block h-10 w-10 overflow-hidden rounded-full border border-gray-300">
            <img src={user.profileImg} alt="User Image" className="h-full w-full object-cover" />
        </span>
        <span>
            <p className="font-semibold text-sm">{user.name} ({user.country})</p>
            <p className="text-xs">Score: {user.points}</p>
        </span>
        <span className="text-sm">
            #{rank}
        </span>
    </div>
  )
}
