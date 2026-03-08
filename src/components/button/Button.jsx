import './button.css'

export function Btn() {
    return (
        <div className="button">
            <button onClick={() => {
                console.log('cliked!!')
            }}>click</button>
        </div>
    )
}