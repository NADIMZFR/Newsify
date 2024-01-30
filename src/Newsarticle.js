import React from 'react'


export default function Newsarticle(props) {
  return (
    <div>
      <div className="newsarticle">
        <div className="images">



          <img src={props.article.urlToImage} alt="" />

        </div>
        <h5>{props.article.title}</h5>
        <p>{props.article.description?.substring(0, 100).concat("...")}<a href={props.article.url}>Read More</a></p>

        <div className="source">

          <p>Author:{props.article.author}</p>
          <p>{props.article.source.name}</p>
        </div>

      </div>
    </div>
  )
}
