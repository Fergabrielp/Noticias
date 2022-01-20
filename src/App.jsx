import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import NewsList from './components/NewsList'

function App() {

  const [categoria, setCategoria] = useState("")
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () =>{

      const key = '74a954082e3a41f888b473bb3f38ba03'
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${key}`
      const res = await fetch(url)
      const news = await res.json()

      setNoticias(news.articles)
      
    }

    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header 
       titulo='Buscador de Noticias'
      />
      <div className='container'>
        <Formulario 
          setCategoria={setCategoria}
        />
        <NewsList 
          noticias={noticias}
        />

      </div>
    </>
  )
}

export default App
