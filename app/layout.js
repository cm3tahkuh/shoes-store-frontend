import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import "./styles/global.scss";




//SEO информация, заголовок сайта, и его описание для поисковой выдачи или соц. сети
export const metadata = {
  title: "Кроссы - и точка",
  description: "Широкий ассортимент, и качественная обувь",
};



export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </CartProvider>
    </AuthProvider>
  );
}
