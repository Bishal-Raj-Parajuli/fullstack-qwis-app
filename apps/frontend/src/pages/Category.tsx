import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import Button from '../components/ui/Button';
import Logo from '../assets/logo-text.png';
import LandingLayout from '../layouts/LandingLayout';
import Modal from '../components/ui/Modal';
import { useCreateUser, useListUsers } from '../hooks/useUserApi';
import { useGetGategoryById } from '../hooks/useCategoryApi';
import { toast } from 'react-toastify';

export default function Category() {
  const { id } = useParams<{ id: string }>() as { id: string };
  const [userFormModal, setUserFormModal] = useState(false);
  const navigate = useNavigate();
  const { data: response } = useListUsers();
  const userList = response?.status === 200 ? response.body.data : [];
  const createUser = useCreateUser();
  const { data: category, isLoading } = useGetGategoryById(parseInt(id));
  const [userFormData, setUserFormData] = useState({
    userName: '',
    country: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (userFormData.country == ' ' || userFormData.userName == '') {
      toast.error('Sorry either you missed entering your name or country.', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      const resp = await createUser.mutateAsync({
        userName: userFormData.userName,
        country: userFormData.country,
      });

      localStorage.setItem('userId', resp.id.toString());
      localStorage.setItem('userName', resp.userName);
      localStorage.setItem('country', resp.country);
      navigate(`/qwis/${id}`);
    }
  };

  function startQwis(id: number) {
    const userId = localStorage.getItem('userId');
    const userData = userId && userList.find((v) => v.id === parseInt(userId));
    if (!userData) {
      setUserFormModal(true);
    } else {
      navigate(`/qwis/${id}`);
    }
  }

  return (
    <>
      <LandingLayout>
        {/* <Navbar /> */}
        <div className="flex flex-col mx-20 sm:mx-42 lg:mx-72 justify-center items-center h-screen">
          {!isLoading ? (
            <>
              <img width="200" src={Logo} />
              <h1 className="text-6xl font-bold my-5">
                {category?.categoryName}
              </h1>
              <p className="my-5 text-justify">{category?.description}</p>
              <Button
                onClick={() => {
                  category && startQwis(category.id);
                }}
              >
                Start
              </Button>
            </>
          ) : (
            <div>Loading..</div>
          )}
        </div>
        {/* <Footer /> */}
      </LandingLayout>
      {userFormModal && (
        <Modal>
          <h1 className="text-3xl">User Detail</h1>
          <label className="items-start w-full">Username</label>
          <input
            type="text"
            value={userFormData.userName}
            name="userName"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
          <label className="items-start w-full">Country</label>
          <input
            type="text"
            value={userFormData.country}
            name="country"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
          <Button onClick={handleSubmit}>Continue</Button>
        </Modal>
      )}
    </>
  );
}
