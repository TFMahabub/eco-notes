"use client";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../../ReduxStore/store";
import Footer from "../../components/shared/footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
// import "./";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* -----suppressHydrationWarning={true} this is for a error----- */}
      <body>
        <ThemeProvider attribute="class">
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
