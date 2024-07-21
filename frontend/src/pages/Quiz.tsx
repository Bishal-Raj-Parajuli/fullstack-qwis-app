import { useParams } from "react-router-dom"
import { ICategory, IQuestion } from "../types";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainContentWrapper from "../components/common/MainContentWrapper";

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
        <MainContentWrapper>
            <div>
                <h1 className="text-3x">Qwis {questionDone.length}</h1>
                {
                    currQuestion ? (
                        <>
                            <h1>{currQuestion.title}</h1>
                            {
                                currQuestion && currQuestion.option.map(option => {
                                    return (
                                        <p>{option.answer}</p>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <h1>Loading ...</h1>
                    )
                }
            </div>
        </MainContentWrapper>
        <Footer />
    </>
  )
}
