//this component  is displayed when '/browse' is accessed

import Banner from "../components/Banner"
import MoviesContainer from "../components/MoviesContainer"

function Browse() {
  return (
    <div>
        <Banner />
        <MoviesContainer />
    </div>
  )
}

export default Browse