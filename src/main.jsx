import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Heading } from './App.jsx'
import { Encryption } from './components/encryption/Encrypt.jsx'
import { Decryption } from './components/decryption/Decrypt.jsx'
import { Btn } from './components/button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='miku'>
      <Heading />
      <Encryption />
      <Decryption />
      <Btn/>
    </div>
  </StrictMode>
)
