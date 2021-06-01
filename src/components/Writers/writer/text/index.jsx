import React from 'react'

function index(props) {
  return (
    <>
      <h4>
      {props.title} {props.published?`(${props.published})`:''}
      </h4>
      <p>
        {props.description?`${props.description}`:<i>No Description</i>}
      </p>
    </>
  )
}

export default index
