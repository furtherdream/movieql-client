import React from "react"
import { Query } from "react-apollo"

const Detail = ({ match: { params: movieID } }) => {
  console.log(movieID)
  return <div>Detail</div>
}

export default Detail
