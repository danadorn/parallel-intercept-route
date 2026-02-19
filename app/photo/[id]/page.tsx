export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Photo ID</h1>
      <p>Hello {id}</p>
    </div>
  );
}
