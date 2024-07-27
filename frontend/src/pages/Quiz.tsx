import { useNavigate, useParams } from "react-router-dom"
import { ICategory, IQuestion } from "../types";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/ui/Button";
import { toast, ToastContainer } from 'react-toastify';
import {useQwisScore, useQwisStatus} from "../stores/QwisScore";
import Modal from "../components/ui/Modal";
import { FaHome } from "react-icons/fa";

export default function Quiz() {
    const {id} = useParams<{id: string}>()
    const navigate = useNavigate();
    const [category, setCategory] = useState<ICategory | null>(null);
    const [currQuestion, setCurrQuestion] = useState<IQuestion | null>(null);
    const [questionDone, setQuestionDone] = useState<number[]>([])
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
    const {score ,setDefaultScore,increaseScore} = useQwisScore();
    const {timerStatus} = useQwisStatus();

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

    useEffect(() => {
        if(!timerStatus){
            saveUserData();
        }
    },[timerStatus])

    function setCurrentQuestion(){
        if (category) {
            let newQuestion;
            let index;
            do {
                ({ obj: newQuestion, index } = getRandomElement(category.questions));
            } while (questionDone.includes(index) && questionDone.length < category.questions.length);

            if (questionDone.length === category.questions.length) {
                // #TODO: All question is done end the game 
                console.log("All questions have been done");
                return;
            }

            setQuestionDone(prev => [...prev, index]);
            setCurrQuestion(newQuestion);
        }
    }

    function checkAnswer(){
        if(selectedAnswerId){
            if(currQuestion?.correctAnswer === selectedAnswerId){
                increaseScore();
                toast.success('Correct!', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } else{
                toast.error('Wrong!', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }  
        }
        setCurrentQuestion();
        setSelectedAnswerId(null);
    }

    function getRandomElement(array: IQuestion[]) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return { 
            obj : array[randomIndex],
            index: randomIndex
        }
    }

    // "id": 11, "name": userName, "points": score, "profileImg": "https://randomuser.me/api/portraits/women/1.jpg", "country": userCountry


    const saveUserData = async () => {
        const apiUrl = 'http://localhost:3000/User'
        const userName = localStorage.getItem('userName')
        const userCountry = localStorage.getItem('country')
        const userId = localStorage.getItem('userId')

        // Post data to json-server
        try {
            // Step 1: Fetch the data
            const response = await fetch(`${apiUrl}/${userId}`);
        
            if (response.ok) {
              // Data exists, perform PUT request to update
              const updateResponse = await fetch(`${apiUrl}/${userId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": userId, "name": userName, "points": score, "country": userCountry
                }),
              });
              const updatedData = await updateResponse.json();
              console.log('Updated data:', updatedData);
            } else {
              // Data does not exist, perform POST request to create
              const createResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": userId, "name": userName, "points": score, "country": userCountry
                }),
              });
              const createdData = await createResponse.json();
              console.log('Created data:', createdData);
            }
          } catch (error) {
            console.error('Error:', error);
          }
      };

      function cleanup(){
        setDefaultScore();
        navigate('/');
      };

  return (
    <>
        <Navbar timer={true} />
            <div className="px-4 flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-4">Qwis {questionDone.length}</h1>
                <div>
                {
                    currQuestion ? (
                        <>
                            <h1 className="text-2xl">{currQuestion.title}</h1>
                            <div className="my-4 flex flex-col items-center">
                            {
                                currQuestion && currQuestion.option.map(option => {
                                    return (
                                        <label key={option.id} className="flex my-2 min-w-96 p-4 bg-secondary rounded-lg items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            name="quiz_question"
                                            value={option.id}
                                            checked= {option.id === selectedAnswerId}
                                            onChange={() => {setSelectedAnswerId(option.id)}}
                                        />
                                        <span className="ml-2 text-xl">{option.answer}</span>
                                        </label>
                                    )
                                })
                            }
                            </div>
                            <div className="flex justify-center">
                                <Button theme="primary" onClick={() => checkAnswer()}>Next</Button>
                            </div>
                        </>
                    ) : (
                        <h1>Loading ...</h1>
                    )
                }
                </div> 

                <div>
                    <h1 className="text-1xl">Total Score: {score}</h1>
                </div>
                <ToastContainer />
            </div>
        <Footer />

        {
            !timerStatus &&  <Modal>
                <h1 className="text-3xl">Time's Up !!</h1>
                <p>Your Score: {score}</p>
                <Button onClick={cleanup}><FaHome className="mr-2" /> Home</Button>
             </Modal>
        }
       
    </>
  )
}
