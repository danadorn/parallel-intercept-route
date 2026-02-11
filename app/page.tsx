import Link from "next/link";

export default function HomePage() {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <div style={gridContainer}>
      {photos.map((id) => (
        <Link key={id} href={`/photo/${id}`} style={card}>
          {id}
        </Link>
      ))}
    </div>
  );
}

const gridContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 200px)",
  gap: "20px",
  justifyContent: "center",
  marginTop: "80px",
};

const card: React.CSSProperties = {
  height: "200px",
  background: "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
  textDecoration: "none",
  color: "green",
};
