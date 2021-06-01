import React from 'react'
import {Link, Route} from 'react-router-dom'
import Writer from './writer'
import Error from '../Error'

function index({writers,...props}) {
  return (
    <div>
      <ul>
        {writers.map((item,index)=>(
          <li key={index}><Link to={`${props.match.url}/${item.id}`}>{item.name}</Link></li>
        ))}
      </ul>
      <Route path={`${props.match.url}/:ID`} render={props=>{
      const writer = writers.find(writer => writer.id === props.match.params.ID)
      if(!writer){
          return <Error/>
        } else {
          return <Writer {...props} writer = {writer} />
        }
    }}/>
    </div>
  )
}

export default index
