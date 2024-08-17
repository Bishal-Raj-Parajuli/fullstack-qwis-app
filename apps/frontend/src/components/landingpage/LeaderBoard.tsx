import LeaderBoardCard from '../ui/LeaderBoardCard';
import { useListUsers } from '../../hooks/useUserApi';

export default function LeaderBoard() {
  // const [users, setUsers] = useState<IUser[] | null>(null);
  // const { apiUrl } = useApiStore();
  const { data: response } = useListUsers();

  const userList = response?.status === 200 ? response.body.data : [];

  // useEffect(() => {
  //   fetch(`${apiUrl}/user`)
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <section className="my-6 mx-4">
      <h2 className="text-3xl text-accent font-semibold">Top 5 Leaderboard</h2>
      <p className="font-extralight text-xs">
        Check the rankings and compete with your friends
      </p>

      <div className="my-4 sm:grid sm:grid-cols-2 sm:grid-flow-row *:m-2">
        {userList &&
          userList
            .sort((a, b) => b.totalPoint - a.totalPoint)
            .slice(0, 5)
            .map((user, i) => {
              return <LeaderBoardCard key={user.id} user={user} rank={i + 1} />;
            })}
      </div>
    </section>
  );
}
