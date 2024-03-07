import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-9/12 max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-4 pr-10 py-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;