import React, { useEffect, useState } from 'react'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Properties from '../../Components/Properties/Properties'
import SmallArticleBox from '../../Components/SmallArticleBox/SmallArticleBox'

export default function Articles() {

  const [showLgArticle, setShowLgArticle] = useState(false)

  useEffect(() => {

    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        setShowLgArticle(true)
      } else {
        setShowLgArticle(false)

      }
    }
    checkWindowSize()

    window.addEventListener('resize', () => {
      checkWindowSize()
    })
  }, [])



  return (
    <div className='pt-16'>
      <NavBar />

      {/* Articles parent */}
      <div className='mt-6 p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  md:px-10 lg:px-14   gap-4 lg:gap-8   justify-items-center '>
        {
          showLgArticle ? (
            <>
              <ArticleBox />
              <ArticleBox />
              <ArticleBox />
              <ArticleBox />
            </>
          ) : (
            <>
              <SmallArticleBox />
              <SmallArticleBox />
              <SmallArticleBox />
              <SmallArticleBox />
            </>

          )
        }
      </div>

      <Properties />
      <Footer />
    </div >
  )
}
