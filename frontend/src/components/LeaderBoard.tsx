export default function LeaderBoard() {
  return (
    <section className="my-6 mx-4">
        <h2 className="text-3xl text-primary font-semibold">Leaderboard</h2>
        <p className="font-extralight">Check the rankings and compete with your friends</p>   

        <div className="my-4 text-white sm:grid sm:grid-cols-2 sm:grid-flow-row *:m-2">
            
            <div className="p-6 flex justify-between items-center bg-secondary rounded-lg shadow-md flex-shrink-0">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full border border-gray-300">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" className="h-full w-full object-cover" />
                </span>
                <span>
                    <p className="font-semibold">Bishal Raj Parajuli</p>
                    <p>Score: 950</p>
                </span>
                <span className="text-2xl">
                    #1
                </span>
            </div>
            <div className="p-6 flex justify-between items-center bg-secondary rounded-lg shadow-md flex-shrink-0">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full border border-gray-300">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" className="h-full w-full object-cover" />
                </span>
                <span>
                    <p className="font-semibold">Bishal Raj Parajuli</p>
                    <p>Score: 950</p>
                </span>
                <span className="text-2xl">
                    #2
                </span>
            </div>
            
            
        </div>
    </section>
  )
}
