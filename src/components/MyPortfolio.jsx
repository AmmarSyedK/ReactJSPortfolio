import React from 'react'
import SectionTitle from './SectionTitle'
import MyPortfolioItem from './MyPortfolioItem'
import portfolio from '../data/portfolio'

function MyPortfolio() {
  return (
    <div className='py-12'>
        <SectionTitle id='myportfolio'>My Portfolio</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {portfolio.map(portfolio => (
            <MyPortfolioItem
            key={portfolio.title}
            imgUrl={portfolio.imgUrl}
            title={portfolio.title}
            tech={portfolio.tech}
            workUrl={portfolio.workUrl}

            ></MyPortfolioItem>
          ))}
          
        </div>
    </div>
  )
}

export default MyPortfolio