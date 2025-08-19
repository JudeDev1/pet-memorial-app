import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'];

const countryCities = {
  Nigeria: ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Calabar'],
  'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Las Vegas'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Ontario', 'Manitoba', 'Nova Scotia'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Scotland', 'Wales', 'Sussex'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Darwin', 'Adelaide'],
};

const countries = Object.keys(countryCities);

const addmemorial = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petName: '',
    category: '',
    imageUrl: '',
    description: '',
    deathDate: '',
    city: '',
    country: '',
  });

  const username = localStorage.getItem('loggedInUser');

  const cityOptions = useMemo(() => (
    formData.country ? countryCities[formData.country] : []
  ), [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      ...(name === 'country' ? { city: '' } : null),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedMemorials = JSON.parse(localStorage.getItem('memorial')) || [];

    const newMemorial = {
      id: Date.now(),
      ...formData,
      userId: username,
    };

    const updatedMemorials = [...savedMemorials, newMemorial];

    localStorage.setItem('memorials', JSON.stringify(updatedMemorials));

    navigate ('/memorials/seememorial');
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')" }}
      />
      <div className="relative z-10 flex flex-col items-end px-4 pt-4">
        <span className="text-sm bg-white text-black px-3 py-1 rounded">Logged in as <strong>{username}</strong></span>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-xl text-black">
          <h2 className="text-3xl text-amber-600 font-bold mb-6 text-center">
            Create a Pet Memorial
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block font-semibold text-amber-600">
              Pet Name
              <input type="text" name="petName" onChange={handleChange} required className="w-full p-2 mt-1 text-gray-800 border rounded" />
            </label>

            <label className="block font-semibold text-amber-600">
              Category
              <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 mt-1 text-gray-800 border rounded">
                <option value="">Select category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </label>

            <label className="block font-semibold text-amber-600">
              Image URL
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 mt-1 text-gray-800 border rounded" />
            </label>

            {formData.imageUrl && (
              <img src={formData.imageUrl} alt="Pet" className="w-64 h-64 object-cover rounded border mx-auto" />
            )}

            <label className="block font-semibold text-amber-600">
              Description
              <textarea name="description" onChange={handleChange} className="w-full p-2 mt-1 text-gray-800 border rounded" />
            </label>

            <label className="block font-semibold text-amber-600">
              Death Date
              <input type="date" name="deathDate" onChange={handleChange} className="w-full p-2 mt-1 text-gray-800 border rounded" />
            </label>

            <label className="block font-semibold text-amber-600">
              Country
              <select name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 mt-1 text-gray-800 border rounded">
                <option value="">Select country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>

            <label className="block font-semibold text-amber-600">
              City
              <select name="city" value={formData.city} onChange={handleChange} required className="w-full p-2 mt-1 text-gray-800 border rounded" disabled={!formData.country}>
                <option value="">{formData.country ? 'Select city' : 'Choose a country first'}</option>
                {cityOptions.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </label>

            <button type="submit" className="w-full bg-amber-800 text-white rounded px-4 py-3 font-semibold hover:bg-amber-700 transition">
              Add Memorial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addmemorial;
