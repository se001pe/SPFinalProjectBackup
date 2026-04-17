import Header from "@/layout/header";
import Footer from "@/layout/footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className = "flex-1 p-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}