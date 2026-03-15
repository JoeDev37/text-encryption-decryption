import './decrypt.css';

export function Decryption({input, setInput}) {

    function handleChange(e) {
        const value = e.target.value .replace(/[^0-9 ]/g, "")
        setInput(value)
    }

    return (
        <div className='container-dec'>
            <textarea 
              placeholder='Decrypt'
              value={input}
            //   onChange={(e) => setInput(e.target.value)}
            onChange={handleChange}
            />
        </div>
    )
}