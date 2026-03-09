// import { useEffect } from 'react'
// import './encrypt.css'

// export function Encryption({text, setText}) {
//     // console.log('Endrypted')
//     // const [text, setText] = useState('')

//     useEffect(() => {
//         const keyHandlers = (e) => {
//             // setText(console.log(e.keyCode))
//             console.log(e.keyCode)
//         }

//         document.addEventListener('keydown', keyHandlers)

//         return ()=> {
//             document.removeEventListener('keydown', keyHandlers)
//         }
//     }, [])

//     return (

//         <div className="container-enc">
//             <textarea
//                 placeholder='Encrypt'
//                 value={text}
//                 onChange={ (e) => {setText(e.target.value)} }
//                 rows= '10'
//             />
//         </div>


//     )
// }

import "./encrypt.css"

export function Encryption({ text, setText }) {
  return (
    <div className="container-enc">
      <textarea
        placeholder="Encrypt"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
      />
    </div>
  )
}