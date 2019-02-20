import React from "react"
import { Query } from "react-apollo"
import { HOME_PAGE } from "./ queries"

const Home = () => (
  <Query query={HOME_PAGE}>
    {/* 이제 데이터를 가지고 오자.
    쿼리 컴포넌트의 단 하나의 룰은 children 함수를 줘야 한다는 것 : 이것을 render prop 라고 함 */}
    {({ loading, data, error }) => {
      if (loading) return "loading"
      if (error) return "something happened"
      console.log(data)
      return data.movies.map(movie => (
        <h2 key={movie.id}>
          {movie.title} / {movie.rating}
        </h2>
      ))
    }}
  </Query>
)

export default Home
