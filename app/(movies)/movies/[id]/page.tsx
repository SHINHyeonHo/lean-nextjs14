export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <h1>Movie Detail {id}</h1>;
}
