// import "./output.css"

// export function Output({ keyCode }) {
//   return (
//     <div className="output-container">
//       <textarea
//         className="a"
//         placeholder="output..."
//         value={keyCode.join('')}
//         readOnly
//       />
//     </div>
//   )
// }

import "./output.css"

export function Output({ keyCode, input }) {
  let display = ""

  if (input) {
    // Decrypt mode: convert numbers to letters
    display = input
      .trim()
      .split(" ")        // split by space into ["79"]
      .map(num => String.fromCharCode(Number(num))) // Number("79") → 79 → "O"
      .join("")
  } else if (keyCode && keyCode.length > 0) {
    // Encrypt mode: show key codes
    display = keyCode.join(" ")
  }

  return (
    <div className="output-container">
      <textarea
        className="a"
        placeholder="output..."
        value={display}
        readOnly
      />
    </div>
  )
}
