import React, { Component } from 'react';

class Search extends Component {

  render () {
    return (
      <div>
        <div class="flex flex-col items-center justify-center border-b border-gray-300 p-3 shadow rounded text-gray-600">
          <input type="search" name="search"   placeholder="Search" class="h-10 px-5 pr-10 rounded-full text-sm focus:outline-none shadow-inner bg-gray-200 w-2/5" />
          <button  class="bg-gray-200 text-sm text-gray-600 hover:bg-gray-300 mt-4 border border-gray-400 border-b-2 text-black font-bold py-1 px-8 shadow rounded-lg hover:border-b focus:bg-gray-300 focus:shadow-inner focus:outline-none hover:text-sm">
            Search
          </button>
        </div>
      </div>
    )
  }
  
}

export default Search;