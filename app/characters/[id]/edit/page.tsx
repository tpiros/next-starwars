export default async function CharacterEditPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  return <div>Character Edit Page for: {params.id}</div>;
}
