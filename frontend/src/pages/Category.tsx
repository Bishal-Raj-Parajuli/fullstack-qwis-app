import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react';
import { ICategory } from '../types';
import Button from '../components/ui/Button';
import Logo from '../assets/logo-text.png';
import LandingLayout from '../layouts/LandingLayout';
import Modal from '../components/ui/Modal';

export default function Category() {

    const { id } = useParams<{id: string}>();
    const [category, setCategory] = useState<ICategory | null>(null);
    const [userFormModal, setUserFormModal] = useState(false);
    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState({
        userName: '',
        country: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = () => {
        localStorage.setItem('userName', userFormData.userName)
        localStorage.setItem('country', userFormData.country)
        navigate(`/qwis/${id}`)
      }

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
            .then(response => response.json())
            .then(data => {
                setCategory(data)})
            .catch(err => console.error(err))
    }, [])

    function startQwis(id: number){
        const userData = localStorage.getItem('userName');
        if(!userData){
            setUserFormModal(true);
        }else{
            navigate(`/qwis/${id}`)
        }
    }

  return (
    <>
        <LandingLayout>
            {/* <Navbar /> */}
                    <div className='flex flex-col mx-20 sm:mx-42 lg:mx-72 justify-center items-center h-screen'>
                    {
                        category ? 
                        <>
                            <img width="200" src={Logo} />
                            <h1 className='text-6xl font-bold my-5'>{category.category}</h1>
                            <p className='my-5 text-justify'>{category.description}</p>
                            <Button onClick={() => {startQwis(category.id)}} >Start</Button>
                        </>
                        :
                        <div>
                            Sorry something went wrong !!
                        </div>
                    }
                    </div>   
            {/* <Footer /> */}
        </LandingLayout>
        {
            userFormModal && <Modal>
                    <h1 className='text-3xl'>User Detail</h1>
                    <label className='items-start w-full'>Username</label>
                    <input type="text" value={userFormData.userName} name='userName' onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' required />
                    <label className='items-start w-full'>Country</label>
                    <input type="text" value={userFormData.country} name='country' onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' required />
                <Button onClick={handleSubmit}>Continue</Button>
            </Modal>
        }
    </>
  )
}
