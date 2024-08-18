import { ToastContainer } from "react-toastify";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";
import { Question } from "@qwis/ts-rest";
import { useGetQuestionList } from "../hooks/useQwisApi";
import { useEffect, useState } from "react";
import Options from "../components/quizpage/Options";



export default function Quiz() {
    const { id } = useParams<{ id: string }>() as { id: string};
    const [questionDone, setQuestionDone] = useState<number[]>([]);
    const [currQuestion, setCurrQuestion] = useState<Question | null>(null);
    const {data: questionList} = useGetQuestionList(parseInt(id));
    
    useEffect(() => {
        if (questionList) {
          setCurrentQuestion();
        }
      },[questionList]);

    function setCurrentQuestion() {
        if (questionList) {
          let newQuestion;
          let index;
          do {
            ({ obj: newQuestion, index } = getRandomElement(questionList));
          } while (
            questionDone.includes(index) &&
            questionDone.length < 0
          );
          
          if (questionDone.length === questionList?.length) {
            // #TODO: All question is done end the game
            console.log('All questions have been done');
            return;
          }
          setQuestionDone((prev) => [...prev, index]);
          setCurrQuestion(newQuestion);
        }
      }

    function getRandomElement(array: Question[]) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return {
          obj: array[randomIndex],
          index: randomIndex,
        };
      }

      

    return (
        <>
          <Navbar timer={true} />
          <div className="px-4 flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold my-4">Qwis {questionDone.length}</h1>
            <div>
              {currQuestion ? (
                <>
                  <h1 className="text-2xl">{currQuestion.title}</h1>
                  <Options questionId={currQuestion.id} />
                  <div className="flex justify-center">
                    <Button theme="primary" onClick={() => checkAnswer()}>
                      Next
                    </Button>
                  </div>
                </>
              ) : (
                <h1>Loading ...</h1>
              )}
            </div>
    
            <div>
              {/* <h1 className="text-1xl">Total Score: {score}</h1> */}
            </div>
            <ToastContainer />
          </div>
          <Footer />
    
          {/* {!timerStatus && (
            <Modal>
              <h1 className="text-3xl">Time's Up !!</h1>
              <p>Your Score: {score}</p>
              <Button onClick={cleanup}>
                <FaHome className="mr-2" /> Home
              </Button>
            </Modal>
          )} */}
        </>
      )
}
