// import './output.css'

// export function Output({text}) {
//     return (
//         <div className="output-container">
//             <textarea className='a' 
//                 value={text}
//             />
//         </div>
//     )
// }

import "./output.css"

export function Output({ text }) {
  return (
    <div className="output-container">
      <textarea
        className="a"
        placeholder="output..."
        value={text}
        readOnly
      />
    </div>
  )
}