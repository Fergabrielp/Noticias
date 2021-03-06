import React from 'react'

const New = ({noticia}) => {
    
    const {urlToImage, url, title, description, source } = noticia 

    const imagen = (urlToImage) ?

        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title'>{source.name}</span>
        </div>

    :null

    return (

        <div className='col s12 m6 l4'>
            <div className='card medium'>
                {imagen}
            
                <div className='card-content'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                
                <div className='card-action'>
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='waves-effect blue darken-1 btn'
                    >Ver noticia completa</a>

                </div>

            </div>

        </div>

    )
}
export default New