import React from 'react'

type SearchBarProps = {
    searchMovie: (e: React.FormEvent) => void;
    query: string;
    setQuery: (value: string) => void;
    loading: boolean;
}
const SearchBar: React.FC<SearchBarProps> = ({ searchMovie, query, setQuery, loading }) => {
  return (
    <div className="flex items-center justify-between">
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>

      <form onSubmit={searchMovie} className="flex mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a movie title..."
          className="flex-1 px-4 py-2 text-base border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className={`px-6 py-2 text-white font-medium rounded-r-md focus:outline-none ${
            loading
              ? "bg-blue-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-l-2 border-white"></div>
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  </div>
  )
}

export default SearchBar