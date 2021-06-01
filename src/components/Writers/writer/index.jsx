import React from 'react'
import {Link,Route} from 'react-router-dom'
import Error from '../../Error'
import Text from './text'

function index({match:{url},writer:{born,deceased,description,id,image,name,texts}}) {
  if(texts){
    return (
        <>
          <img src={image} alt="writer" style={{width:'300px'}} />
          <h1>{name}</h1>
          <h3>{born} &mdash; {deceased}</h3>
          <p>
            {description}
          </p>
          <ul>
            {
              texts.map((item,index)=>(
              <li key={index}>
                <Link to={`${url}/${item.articleId}`}>{item.title}</Link>
              </li>))
            }
          </ul>
          <Route path={`${url}/:articleId`} render={(props)=>{
            const text=texts.find(text=>text.articleId===props.match.params.articleId) 
            if(text){
              return <Text {...text} />
            } else {
              return <Error/>
            }
          }} />
        </>
      )
    } else {
      return (
        <>
          <img src={image} alt="writer" style={{width:'300px'}} />
          <h1>{name}</h1>
          <h3>{born} &mdash; {deceased}</h3>
          <p>
            {description}
          </p>
        </>
      )
    }
}
  

export default index
