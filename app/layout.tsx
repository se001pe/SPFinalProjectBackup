import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <ClientLayout>
          {children}
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}