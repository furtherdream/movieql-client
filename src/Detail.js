import React from "react"
import { Query } from "react-apollo"
import { MOVIE_DETAILS } from "./queries"

const Detail = ({
  match: {
    params: { movieID }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieID }}>
    {({ loading, data, error }) => {
      if (loading) return "loading"
      if (error) return "error"
      return (
        <React.Fragment>
          {data.movie.title}
          {data.movie.medium_cover_image}
          {data.movie.rating}
          {data.movie.description_intro}
        </React.Fragment>
      )
    }}
  </Query>
)

export default Detail
