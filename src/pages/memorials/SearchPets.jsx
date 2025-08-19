import React from 'react';

const SearchPets = () => {
  return (
    <div className="bg-stone-200 max-w-9xl text-center mx-auto py-12 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Pet Memorials</h2>
        <p className="text-gray-600 mt-2">Find memorials shared by others in our community.</p>
      </div>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by pet name..."
          className="w-full max-w-md border bg-white border-gray-300 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
    </div>
  );
};

export default SearchPets;
