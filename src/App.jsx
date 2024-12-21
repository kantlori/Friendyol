import './App.css'
import Header from './Header/Header'
import ArticlesTop from './Articles/Articles-top'
import BannerList from './Articles/Banner-list/Banner-list.jsx'
import PopularCards from './Articles/PopularCard/PopularCards.jsx'
import BannerThree from './Articles/Banner-list/Banner-three.jsx'

function App() {

  return (
    <>
      <Header />
      <ArticlesTop />
      <BannerList />
      <PopularCards />
      <BannerThree />
    </>
  )
}

export default App
