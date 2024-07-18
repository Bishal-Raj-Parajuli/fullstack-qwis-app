export default function LandingHero() {
  return (
    <div className="py-36 px-5 bg-gradient-to-r from-secondary to-primary flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl">Welcome to Qwis</h1>
        <p className="font-extralight text-center">Test your knowledge, challenge your freinds, and have fun with out wide range of quizzes.</p>
        <p className="font-extralight text-center">You have limited minutes to complete as many quizzes as you can. Good luck!</p>
        <div className="*:mx-4 *:rounded-2xl *:px-4 *:py-2 *:bg-white text-secondary font-semibold my-5">
            <button>Start Quiz</button>
            <button className="bg">Learn More</button>
        </div>
    </div>
  )
}
