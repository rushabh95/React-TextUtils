import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleUpperClick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText)
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark' ? 'white': '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value ={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='light' ? 'white': 'grey', color:props.mode==='light' ? '#042743': 'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark' ? 'white': '#042743'}}>
                <h3>Your Text summary</h3>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{text.split(' ').length * 0.008} Minutes to read this text</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something above in box to preview"}</p>
            </div>
        </>
    )
}
