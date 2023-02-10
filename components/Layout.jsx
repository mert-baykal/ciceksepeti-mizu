import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Source_Sans_Pro } from '@next/font/google'
const font = Source_Sans_Pro({ weight: ['200','300','400','600','700','900'],subsets: ['latin'] })

const Layout = ({ children }) => {
  return (
    <div className={font.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;