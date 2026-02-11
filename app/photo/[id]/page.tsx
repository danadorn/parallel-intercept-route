export default function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Photo ID</h1>
      <p>Hello {params.id}</p>
    </div>
  );
}
