"use client";

import { useRouter } from "next/navigation";

export default function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={() => router.back()} style={closeBtn}>
          ✕
        </button>

        <h2>Photo ID</h2>
        <p>Hello {params.id}</p>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal: React.CSSProperties = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "400px",
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};
