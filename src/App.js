import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Newsarticle from './Newsarticle'
import './App.css'

export default function App() {

  const [articles, setarticles] = useState([])
  const [category, setcategory] = useState("animal")
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-26&to=2024-01-26&sortBy=popularity&apiKey=87520d25778f463f8cf50f5f63afda1f`)
      .then((response) => response.json())
      .then((data) => {
        setarticles(data.articles)
        console.log(data.articles)
      })
      .catch(error => console.log(error))
  }, [category])
  return (
    <div>
      <header className="header">
        <h1>NEWSIFY</h1>
        <input type="text" placeholder='Search here' onChange={(event) => {
          if (event.target.value !== "") {
            setcategory(event.target.value)
          }
          else {
            setcategory("animal")
          }

        }}>


        </input>
      </header>
      <section className="articlesection">
        {
          articles.length !== 0 ?
            articles.map((article) => {
              return (
                <Newsarticle article={article} />
              )
            }) :
            <h1>No News Available</h1>
        }











      </section>
    </div>
  )
}
