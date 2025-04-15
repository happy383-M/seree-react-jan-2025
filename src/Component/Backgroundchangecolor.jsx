import {useState} from 'react';
function Backgroundchangecolor() {
               const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'aqua', 'violet'];
    const [color, setColor] = useState('white');

    const changeBackcolor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
        document.body.style.backgroundColor = randomColor;
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{ color: color }}>Click the button to change the background color!</h2>
            <button
                style={{ borderRadius: '20px', padding: '10px 20px', backgroundColor: color,color: 'white',border: 'none',cursor: 'pointer',fontSize: '16px',
                    transition: 'background-color 0.3s ease',}} onClick={changeBackcolor}>Change Background
            </button>
        </div>
    );
}

export default Backgroundchangecolor;