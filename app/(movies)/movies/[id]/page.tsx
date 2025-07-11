import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);
  return <h1>{movie.title}</h1>;
}
