import { IUserList } from '../../types';
import { IoIosPerson } from 'react-icons/io';

interface Props {
  user: IUserList;
  rank: number;
}

export default function LeaderBoardCard({ user, rank }: Props) {
  return (
    <div className="py-1 px-4 flex justify-between items-center text-accent bg-background border-accent border rounded-lg shadow-md flex-shrink-0">
      <span className="flex justify-center items-center h-10 w-10 overflow-hidden rounded-full border border-gray-300">
        <IoIosPerson fontSize={50} />{' '}
        {/* <img src={user.profileImg} alt="User Image" className="h-full w-full object-cover" /> */}
      </span>
      <span>
        <p className="font-semibold text-sm">
          {user.userName} ({user.country})
        </p>
        <p className="text-xs">Score: {user.totalPoint}</p>
      </span>
      <span className="text-sm">#{rank}</span>
    </div>
  );
}
