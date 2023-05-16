export default async function CharacterDisplayPlay({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  return <div>Character Display Page for: {params.id}</div>;
}
