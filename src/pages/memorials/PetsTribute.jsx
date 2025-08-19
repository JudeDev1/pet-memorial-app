import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetsTribute = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/memorials/signin');
  };

  return (
    <div className="bg-stone-200 text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Celebrate the Life of Your Beloved Pet</h1>
      <p className="text-lg mb-6">Create a heartfelt memorial to remember your furry friend forever</p>
      <button
        className="bg-amber-500 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl shadow"
        onClick={handleSubmit}
      >
        Create a Memorial
      </button>
    </div>
  );
};

export default PetsTribute;
