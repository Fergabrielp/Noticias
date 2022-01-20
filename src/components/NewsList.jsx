import React from 'react'
import New from './New'


const NewsList = ({noticias}) => {
    return (
        <div className='row'>
            {noticias.map(noticia => (
                <New
                    noticia={noticia} 
                    key={noticia.url}
                />      
            ))}
            
        </div>
    )
}

export default NewsList
