import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// interface IParams {
//   params: { id: string };
// }

export async function generateMetadata({ params }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
