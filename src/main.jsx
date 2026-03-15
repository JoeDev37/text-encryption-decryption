import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Heading } from './App.jsx'
import { Encryption } from './components/encryption/Encrypt.jsx'
import { Decryption } from './components/decryption/Decrypt.jsx'
import { Output } from './components/outputs/Output.jsx'

export function App() {
  const [text, setText] = useState("")
  const [input, setInput] = useState('')
  const [keyCode, setKeyCode] = useState([])

  return (
    <div className='miku'>
      <Heading />
      
      <Encryption text={text} setText={setText} setKeyCode={setKeyCode} />
      <Decryption input={input} setInput={setInput} />
      {/* <Output text={text || input} keyCode={keyCode}/> */}
      <Output keyCode={keyCode} input={input} text={text} />

      
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)