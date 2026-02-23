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

        <h2>Photo ID {params.id}</h2>
        <p>Description</p>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(182, 182, 182, 0.81)",
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
