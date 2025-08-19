import React from 'react';
import { Link } from 'react-router-dom'; //

const GriefResources = () => {
  return (
    <div className="bg-stone-200 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Link to="/memorials/seememorial">
          <button className="bg-stone-700 hover:bg-stone-900 text-white font-semibold p-4 mb-8 rounded-xl transition">
            See Memorials
          </button>
        </Link>
        <h2 className="text-3xl font-bold mb-4">Grief Resources</h2>
        <p className="text-gray-600 mb-8">Helpful articles and links to support you through your loss.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#" className="bg-amber-500 hover:bg-amber-200 rounded-xl p-4 shadow">
            Coping with Loss
          </a>
          <a href="#" className="bg-amber-500 hover:bg-amber-200 rounded-xl p-4 shadow">
            Talking to Children
          </a>
          <a href="#" className="bg-amber-500 hover:bg-amber-200 rounded-xl p-4 shadow">
            Finding Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default GriefResources;
