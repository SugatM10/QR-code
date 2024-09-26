import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'

const App = () => {
    const[value, setValue] = useState('')
    const[input, setInput] = useState('')

    const genQr = () => {
        setValue(input)
    }

    return (
        <>
            <div>
                <h1>QR Code Generator</h1>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    name='qr-code' 
                    placeholder='Enter value'
                />
                <button disabled={input && input.trim() !== '' ? false : true} onClick={genQr}>Generate QR </button>
            </div>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                <QRCode 
                    value={value} 
                    size={256} 
                    bgColor='#fff'
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
            </div>
        </>
    )
}

export default App
