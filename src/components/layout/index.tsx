import { useOutlet } from "react-router-dom"
import ScrollToTop from "../../utils/scroll-to-top"
import Navbar from "../global/navbar"
import Footer from "../global/footer"

export default function Layout() {
  const outlet = useOutlet()
  return (
    <div className='relative'>
      <Navbar />
      <ScrollToTop />
      {outlet}
      <Footer />
    </div>
  )
}
