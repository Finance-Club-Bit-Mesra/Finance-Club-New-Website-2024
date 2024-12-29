import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import Fc1 from '../assets/fc1.png';
import bg from '../assets/bg.jpg';
import { useForm } from '@formspree/react';
import Modal from '../components/Modal';

export default function Login() {
  
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    branch: '',
    email: '',
    resumeLink: '',
    joinReason: '',
    otherQueries: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

    //for emailing we have used freespree services
    const formRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [state, handleSubmit] = useForm("mdkkgpwp");
  
    const clearForm = () => {
      setFormData({
        name: '',
        roll: '',
        branch: '',
        email: '',
        resumeLink: '',
        joinReason: '',
        otherQueries: '',
      });
  
      if (formRef.current) {
        formRef.current.reset();
      }
    };
  
    useEffect(() => {
      if (state.succeeded) {
        setModalOpen(true);
      }
    }, [state.succeeded]);
  
  
    const closeModal = () => {
      setModalOpen(false);
      clearForm(); 
    };

  return (
    <div className="flex flex-col md:flex-row min-h-screen py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative hidden md:block">
        <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50  rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-500 opacity-30"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-gray-800 px-4 lg:px-16">
          <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-center">
            Finance Club<br/> BIT Mesra
          </h1>
          <p className="text-lg lg:text-xl text-center">
            Unleash the financial tycoon within you. Learn, grow, and excel in the world of finance.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 bg-white p-6 lg:p-8 justify-center items-center rounded-lg ">
        <Link to="/" className="mb-4 lg:mb-8">
          <img src={Fc1} alt="Finance Club Logo" className="h-12 lg:h-16" />
        </Link>
        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="roll" className="block text-sm font-medium text-gray-700">Roll No.</label>
              <input
                type="text"
                id="roll"
                name="roll"
                value={formData.roll}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link / LinkedIn Profile Link</label>
            <input
              type="text"
              id="resumeLink"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="joinReason" className="block text-sm font-medium text-gray-700">Why do you wish to join the club?</label>
            <textarea
              id="joinReason"
              name="joinReason"
              value={formData.joinReason}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="otherQueries" className="block text-sm font-medium text-gray-700">Other questions / queries if any?</label>
            <textarea
              id="otherQueries"
              name="otherQueries"
              value={formData.otherQueries}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Join Us
          </button>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Success!"
        message="Message sent successfully!"
      />

    </div>
     
  );
}
