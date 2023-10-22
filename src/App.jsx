import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import bgArr from "./utils/bgArr.json"
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'

function App() {

  const quote = getRandomFromArr(phrases)
  const [phraseRandom, setphraseRandom] = useState(quote)
  const [bgApp, setbgApp] = useState(getRandomFromArr(bgArr))
  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.png')`
  }
  return (

    <div style={objStyle} className='app'>

      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
        <Phrase
          phraseRandom={phraseRandom}
        />
        <ButtonPhrase
          setphraseRandom={setphraseRandom}
          setbgApp={setbgApp}
        />
      </article>


    </div>

  )

}



export default App