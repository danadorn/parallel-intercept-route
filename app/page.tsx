import Link from "next/link";

export default function HomePage() {
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
  gridTemplateColumns: "repeat(4, 300px)",
  gap: "30px",
  justifyContent: "center",
  marginTop: "80px",
}; 

const card: React.CSSProperties = {
  height: "200px",
  background: "#9b0101",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
  textDecoration: "none",
  color: "rgb(7, 255, 247)",
};
