import React from 'react'
import ActorsQuantity from './ActorsQuantity'
import MoviesDataBase from './MoviesDataBase'
import TotalAwards from './TotalAwards'
import '../assets/css/app.css'

function ContentRowMovies(){
    return(
        <div className="row">

        {/*                     <!-- Movies in Data Base --> */}
                            <MoviesDataBase/>
        
        {/*                     <!-- Total awards --> */}

                            <TotalAwards/>
        {/*                     <!-- Actors quantity --> */}
                            <ActorsQuantity/>
                </div>
        
    )
}

export default ContentRowMovies