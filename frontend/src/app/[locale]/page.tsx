// "use client";

export default function HomePage() {
  return (
    <main
      className="pt-[200px] h-screen" // ヘッダーの高さに応じたパディングと全高に設定
      style={{
        backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <h1>{t("Monja1")}</h1> // Call the hook by passing as parameter  */}
    </main>
  );
}
