import { useParams } from "react-router-dom"
import { ICategory, IQuestion } from "../types";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/ui/Button";

export default function Quiz() {


    const {id} = useParams<{id: string}>()
    const [category, setCategory] = useState<ICategory | null>(null);
    const [currQuestion, setCurrQuestion] = useState<IQuestion | null>(null);
    const [questionDone, setQuestionDone] = useState<number[]>([])

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
            .then(response => response.json())
            .then(data => {
                setCategory(data)  
            })
            .catch(err => console.error(err))
    }, []) 
    
    useEffect(() => {
        setCurrentQuestion()
    },[category])

    function setCurrentQuestion(){
        if (category) {
            let newQuestion;
            let index;
            do {
                ({ obj: newQuestion, index } = getRandomElement(category.questions));
            } while (questionDone.includes(index) && questionDone.length < category.questions.length);

            if (questionDone.length === category.questions.length) {
                console.log("All questions have been done");
                return;
            }

            setQuestionDone(prev => [...prev, index]);
            setCurrQuestion(newQuestion);
        }
    }

    function getRandomElement(array: IQuestion[]) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return { 
            obj : array[randomIndex],
            index: randomIndex
        }
      }

  return (
    <>
        <Navbar timer={true} />
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-4">Qwis {questionDone.length}</h1>
                <div>
                {
                    currQuestion ? (
                        <>
                            <h1 className="text-2xl">{currQuestion.title}</h1>
                            <div className="my-4">
                            {
                                currQuestion && currQuestion.option.map(option => {
                                    return (
                                        <label key={option.id} className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            name="quiz_question"
                                        />
                                        <span className="ml-2 text-lg">{option.answer}</span>
                                        </label>
                                    )
                                })
                            }
                            </div>
                            <div className="flex justify-center">
                                <Button theme="primary" clickAction={() => setCurrentQuestion()} title="Next" />
                            </div>
                        </>
                    ) : (
                        <h1>Loading ...</h1>
                    )
                }
                </div> 
            </div>
        <Footer />
    </>
  )
}
