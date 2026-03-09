// import { useState } from 'react';
// import './decrypt.css';

// export function Decryption() {
//     console.log('dicrypted')
//     const {text, setText} = useState('')

//     return (

//         <div className="container-dec">
//             <textarea
//                 placeholder='Decrypt'
//                 value={text}
//                 onChange={
//                     (e) => {
//                         setText(e.target.value)
//                     }
//                 }
//                 rows= '10'
//             />
//         </div>
//     )
// }

import './decrypt.css';

export function Decryption({input, setInput}) {
    return (
        <div className='container-dec'>
            <textarea 
              placeholder='Decrypt'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}