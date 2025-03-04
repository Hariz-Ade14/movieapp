"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import Movie from "@/components/Movie";

export default function Home() {
  interface Movie {
    Title: string;
    Released: string;
    imdbRating: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
  }

  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovie = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a movie title");
      return;
    }

    setLoading(true);
    setError("");
    setMovie(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(
          query
        )}&apikey=6ff050dd`
      );
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error || "Movie not found. Please try another title.");
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("An error occurred while fetching data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto font-sans h-full">
      <SearchBar
        searchMovie={searchMovie}
        query={query}
        loading={loading}
        setQuery={setQuery}
      />

      {loading && <Loading />}

      {error && <Error error={error} />}

      {movie && (
        <Movie
          poster={movie.Poster}
          title={movie.Title}
          releaseDate={movie.Released}
          rating={movie.imdbRating}
        />
      )}
    </div>
  );
}
