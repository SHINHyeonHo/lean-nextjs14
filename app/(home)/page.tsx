import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { MOVIE_URL } from "../constant";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return await fetch(MOVIE_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
        // <li key={movie.id}>
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </li>
      ))}
    </div>
  );
}
