import React from 'react';

const pets = [
  {
    id: 1,
    name: 'Bella',
    image: 'images/browncat.jpg',
    tribute: 'Bella was more than a pet she was family. Quietly graceful and endlessly loving, she brought warmth into every room she entered.',
  },
  {
    id: 2,
    name: 'Max & Maxwell',
    image: 'images/browndogs.jpg',
    tribute: 'Max and Maxwell were more than dogs they were loyal hearts wrapped in fur, always ready with love, joy, and unwavering devotion.',
  },
  {
    id: 3,
    name: 'Luna & Tuna',
    image: 'images/guineapigs.jpg',
    tribute: 'Luna and Tuna were tiny bundles of joy with big personalities and even bigger hearts.They would be greatly missed.',
  },
];

const PetsCard = () => {
  return (
    <div className="bg-stone-200 py-12">
      <div className="mt-5 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Memorials</h2>
        <div className="grid gap-6 items-center grid-cols-1 md:grid-cols-3">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-gray-100 rounded-2xl p-4 shadow hover:shadow-lg transition">
              <img 
                src={pet.image} 
                alt={pet.name}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />  
              <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
              <p className="text-gray-600">{pet.tribute}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetsCard;
