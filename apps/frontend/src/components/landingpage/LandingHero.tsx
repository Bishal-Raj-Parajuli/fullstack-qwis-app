import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function LandingHero() {
  return (
    <div className="py-36 px-5 mt-16 flex flex-col justify-center items-center text-dark rounded-lg">
        <h1 className="text-7xl font-bold text-center">Welcome to <span className="text-accent">Qwis</span></h1>
        <p className="font-light text-center my-4">Test your knowledge, challenge your freinds, and have fun with our wide range of quizzes.</p>
        <div className="flex my-2">
          <Link to={`/categories`}>
            <Button>Start Qwis</Button>
          </Link>
            <Button theme="secondary">Learn More</Button>
        </div>
    </div>
  )
}
