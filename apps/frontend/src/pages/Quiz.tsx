import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { toast, ToastContainer } from 'react-toastify';
import { useQwisScore, useQwisStatus } from '../stores/QwisScore';
import Modal from '../components/ui/Modal';
import { FaHome } from 'react-icons/fa';
import useApiStore from '../stores/api.store';
import { useGetOptionList, useGetQuestionList } from '../hooks/useQwisApi';
import { Option, Question } from '@qwis/ts-rest';
import { useUpdateUserData } from '../hooks/useUserApi';

export default function QuizOld() {
  const { id } = useParams<{ id: string }>() as { id: string};
  const navigate = useNavigate();
  const [currQuestion, setCurrQuestion] = useState<Question | null>(null);
  const [questionDone, setQuestionDone] = useState<number[]>([]);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const { score, setDefaultScore, increaseScore } = useQwisScore();
  const { timerStatus } = useQwisStatus();
  const { apiUrl } = useApiStore();
  const {data: questionList} = useGetQuestionList(parseInt(id));
  const [options, setOptions] = useState<Option[] | null>();
  const { data: optionList, refetch: refetchOptions } = useGetOptionList(currQuestion?.id);
  const updateUserData = useUpdateUserData();

  useEffect(() => {
    if (questionList) {
      setCurrentQuestion();
    }
  },[questionList]);

  useEffect(() => {
    refetchOptions();
  })


  useEffect(() => {
    if (!timerStatus) {
      saveUserData();
    }
  }, [timerStatus]);

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

  function checkAnswer() {
    if (selectedAnswerId) {
      console.log(optionList?.find(opt => opt.id === selectedAnswerId));
      if (optionList?.find(opt => opt.id === selectedAnswerId)?.correctAnswer) {
        increaseScore();
        toast.success('Correct!', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.error('Wrong!', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }
    setCurrentQuestion();
    setSelectedAnswerId(null);
  }

  function getRandomElement(array: Question[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return {
      obj: array[randomIndex],
      index: randomIndex,
    };
  }

  const saveUserData = async () => {
    const userId = localStorage.getItem('userId');
    try {
    if(userId){
      updateUserData.mutateAsync({
        id: parseInt(userId),
        data: {
            totalPoint: score
        }
      })
    }
    // Post data to json-server
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function cleanup() {
    setDefaultScore();
    navigate('/');
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
              <div className="my-4 flex flex-col items-center">
                {optionList &&  optionList.map((option) => {
                    return (
                      <label
                        key={option.id}
                        className="flex my-2 min-w-96 p-4 bg-secondary rounded-lg items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="form-checkbox h-5 w-5 text-blue-600"
                          name="quiz_question"
                          value={option.id}
                          checked={option.id === selectedAnswerId}
                          onChange={() => {
                            setSelectedAnswerId(option.id);
                          }}
                        />
                        <span className="ml-2 text-xl">{option.answer}</span>
                      </label>
                    );
                  })}
              </div>
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
          <h1 className="text-1xl">Total Score: {score}</h1>
        </div>
      </div>
      <Footer />

      {!timerStatus && (
        <Modal>
          <h1 className="text-3xl">Time's Up !!</h1>
          <p>Your Score: {score}</p>
          <Button onClick={cleanup}>
            <FaHome className="mr-2" /> Home
          </Button>
        </Modal>
      )}
    </>
  );
}
