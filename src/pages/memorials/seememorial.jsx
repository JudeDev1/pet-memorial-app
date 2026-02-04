import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Memorial = () => {
  const [memorials, setMemorials] = useState([]);
  const [username, setUsername] = useState('');
  const [showAll, setShowAll] = useState(true);
  const navigate = useNavigate();

  const fixedMemorials = [
    {
      id: 'fixed-1',
      petName: 'Max',
      category: 'Dog',
      description: 'Loyal friend and protector. You are missed every day.',
      deathDate: '2022-03-15',
      city: 'Austin',
      country: 'USA',
      imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: 'fixed-2',
      petName: 'Whiskers',
      category: 'Cat',
      description: 'The queen of the house. Loved beyond measure.',
      deathDate: '2023-07-09',
      city: 'London',
      country: 'UK',
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: 'fixed-3',
      petName: 'Bubbles',
      category: 'Rabbit',
      description: 'Small but unforgettable.',
      deathDate: '2021-11-02',
      city: 'Canada',
      country: 'Manitoba',
      imageUrl: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?q=80&w=1074&auto=format&fit=crop',
    },
    {
      id: 'fixed-4',
      petName: 'Charlie',
      category: 'Dog',
      description: 'The best hiking partner anyone could ask for.',
      deathDate: '2020-06-25',
      city: 'Denver',
      country: 'USA',
      imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: 'fixed-5',
      petName: 'Luna',
      category: 'Rabbit',
      description: 'Hopped her way into our hearts.',
      deathDate: '2022-12-19',
      city: 'Paris',
      country: 'France',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1693756973030-b521b522afb7?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: 'fixed-6',
      petName: 'Shadow',
      category: 'Bird',
      description: 'Always found the coziest spot to nap.',
      deathDate: '2019-08-03',
      city: 'Berlin',
      country: 'Germany',
      imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1169&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    const storedRaw = localStorage.getItem('memorials');
    const stored = JSON.parse(storedRaw) || [];
    const filtered = stored.filter((m) => m.userId === user);

    setUsername(user);
    setMemorials(filtered);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-cover bg-center z-0 opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>
      
      {/* Top Bar */}
      {username && (
        <div className="flex justify-end items-center mb-6">
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer p-2 bg-white rounded-lg shadow group-hover:shadow-md">
              <div className="w-8 h-8 bg-amber-600 text-white flex items-center justify-center rounded-full">
                {username[0].toUpperCase()}
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Logged in as {username}
              </span>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="absolute right-0 mt-1 w-40 bg-white rounded shadow-lg hidden group-hover:block z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowAll(true)}
          className={`px-4 py-2 rounded-lg shadow ${
            showAll
              ? 'bg-amber-700 text-white'
              : 'bg-white text-amber-700 border border-amber-700'
          }`}
        >
          All Memorials
        </button>
        <button
          onClick={() => setShowAll(false)}
          className={`px-4 py-2 rounded-lg shadow ${
            !showAll
              ? 'bg-amber-700 text-white'
              : 'bg-white text-amber-700 border border-amber-700'
          }`}
        >
          My Memorials
        </button>
      </div>

      {/* Memorials */}
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fixedMemorials.map((memorial) => (
            <div key={memorial.id} className="bg-white shadow rounded-lg p-4">
              <img
                src={memorial.imageUrl}
                alt={memorial.petName}
                className="w-full h-56 object-cover rounded"
                onError={(e) => {
                  e.target.src = '';
                }}
              />
              <h3 className="mt-4 text-xl font-bold text-amber-800">{memorial.petName}</h3>
              <p className="text-sm text-gray-600">{memorial.category}</p>
              <p className="text-sm text-gray-500 mt-1">{memorial.description}</p>
              <p className="text-xs text-gray-400 mt-2">Passed on: {memorial.deathDate}</p>
              <p className="text-xs text-gray-400">
                Location: {memorial.city}, {memorial.country}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">Your Memorials</h3>
          {memorials.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">Input your memorials.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memorials.map((memorial) => (
                <div key={memorial.id} className="bg-white shadow rounded-lg p-4">
                  <img
                    src={memorial.imageUrl}
                    alt={memorial.petName}
                    className="w-full h-56 object-cover rounded"
                    onError={(e) => {
                      e.target.src = '';
                    }}
                  />
                  <h3 className="mt-4 text-xl font-bold text-amber-800">{memorial.petName}</h3>
                  <p className="text-sm text-gray-600">{memorial.category}</p>
                  <p className="text-sm text-gray-500 mt-1">{memorial.description}</p>
                  <p className="text-xs text-gray-400 mt-2">Passed on: {memorial.deathDate}</p>
                  <p className="text-xs text-gray-400">
                    Location: {memorial.city}, {memorial.country}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Memorial;



