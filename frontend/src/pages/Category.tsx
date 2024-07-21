import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ICategory } from '../types';
import Button from '../components/ui/Button';
import Logo from '../assets/logo-text.png';

export default function Category() {

    const { id } = useParams<{id: string}>();
    const [category, setCategory] = useState<ICategory | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
            .then(response => response.json())
            .then(data => {
                setCategory(data)})
            .catch(err => console.error(err))
    }, [])

  return (
    <>
        <Navbar />
                <div className='flex flex-col mx-20 sm:mx-42 lg:mx-72 justify-center items-center h-screen'>
                {
                    category ? 
                    <>
                        <img width="200" src={Logo} />
                        <h1 className='text-6xl font-bold my-5'>{category.category}</h1>
                        <p className='my-5 text-justify'>{category.description}</p>
                        <Link to={`/qwis/${category.id}`}><Button theme='primary' title='Start' /></Link>
                    </>
                    :
                    <div>
                        Sorry something went wrong !!
                    </div>
                }
                </div>   
        <Footer />
    </>
  )
}
