import './App.css'
import Header from './Header/Header'
import ArticlesTop from './Articles/Articles-top'
import BannerList from './Articles/Banner-list/Banner-list.jsx'
import PopularCards from './Articles/Cards/PopularCards.jsx'
import BannerThree from './Articles/Banner-list/Banner-three.jsx'
import DiscountCards from './Articles/Cards/DiscountCards.jsx'
import SuggestionsCategory from './Articles/SuggestionCategory.jsx'
import SuggestionTrademarks from './Articles/SuggestionTrademark.jsx'
import { useState, useEffect } from 'react'
import React from 'react';


// MainCategories'i lazy load yapıyoruz
const LazyMainCategories = React.lazy(() => import('./Articles/MainCategories.jsx'))

function App() {
  const [mainCategoriesVisible, setMainCategoriesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMainCategoriesVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const target = document.getElementById('mainCategories')
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <ArticlesTop />
      <BannerList />
      <PopularCards />
      <BannerThree />
      <DiscountCards />
      <SuggestionsCategory />
      <SuggestionTrademarks />
      <div id="mainCategories">
        {mainCategoriesVisible ? (
          <React.Suspense fallback={<div>Loading Main Categories...</div>}>
            <LazyMainCategories />
          </React.Suspense>
        ) : (
          <div>Scroll down to load Main Categories...</div>
        )}
      </div>
    </>
  )
}

export default App
