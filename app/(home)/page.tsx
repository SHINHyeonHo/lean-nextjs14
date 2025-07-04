export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return await fetch(URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
