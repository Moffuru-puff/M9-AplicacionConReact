import React from 'react'
import '../assets/css/app.css'

function GenresInDb(){

    let Genres = ['Acción', 'Animación', 'Aventura' ,'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']
    let listGenres = Genres.map((genre) =>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                {genre}
                            </div>
                        </div>
                    </div>)

    return(
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    
                    {listGenres}

                </div>
            </div>
        </div>
    </div>
    )
}

export default GenresInDb