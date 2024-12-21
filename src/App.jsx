import './App.css'
import Header from './Header/Header'
import ArticlesTop from './Articles/Articles-top'
import BannerList from './Articles/Banner-list/Banner-list.jsx'
import PopularCards from './Articles/Cards/PopularCards.jsx'
import BannerThree from './Articles/Banner-list/Banner-three.jsx'
import DiscountCards from './Articles/Cards/DiscountCards.jsx'

function App() {

  return (
    <>
      <Header />
      <ArticlesTop />
      <BannerList />
      <PopularCards />
      <BannerThree />
      <DiscountCards />
    </>
  )
}

export default App
