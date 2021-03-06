import gql from "graphql-tag"

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieID: Int!) {
    movie(id: $movieID) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieID) {
      id
      title
      rating
      medium_cover_image
    }
  }
`
