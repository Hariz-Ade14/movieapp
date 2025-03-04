import React from 'react'

interface MovieProps {
  poster: string;
  title: string;
  releaseDate: string;
  rating: number | string;
}

const Movie: React.FC<MovieProps> = ({ poster, title, releaseDate, rating}) => {
  return (
    <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md mx-4">
          <div className="flex flex-col md:flex-row">
            {poster && poster !== "N/A" ? (
              <img
                src={poster}
                alt={`${title} poster`}
                className="w-full md:w-64 h-auto object-contain bg-gray-100"
              />
            ) : (
              <div className="w-full md:w-64 h-64 flex items-center justify-center bg-gray-100 text-gray-500">
                No poster available
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="mb-2">
                <span className="font-semibold">Released:</span>{" "}
                {releaseDate}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Rating:</span>{" "}
                {rating}/10
              </p>
             
            </div>
          </div>
        </div>
  )
}

export default Movie