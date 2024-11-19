"use client";

export default function Home() {
  return (
    <main
      className="pt-[200px] h-screen" // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></main>
  );
}
