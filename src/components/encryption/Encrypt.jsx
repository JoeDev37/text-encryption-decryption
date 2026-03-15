import "./encrypt.css"

export function Encryption({ text, setText, setKeyCode }) {

  function handleChange(e) {
    const value = e.target.value
    setText(value)

    // Convert the current text to ASCII codes
    const codes = Array.from(value).map(char => char.charCodeAt(0))
    setKeyCode(codes)
  }

  return (
    <div className="container-enc">
      <textarea
        placeholder="Encrypt"
        value={text}
        onChange={handleChange}
        rows="10"
      />
    </div>
  )
}
