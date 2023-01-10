import "../styles/globals.css";
import Header from "../components/Header";
import { ContextProvider } from "../contexts/ContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
