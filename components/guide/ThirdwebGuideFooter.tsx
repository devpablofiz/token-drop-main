import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #eb8c34",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://fruttacoin.io",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18
        }}
      >
        <img
          src="/fruit-basket.jpg"
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://fruttacoin.io",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
