import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handelOnChange = (event) => {
        setText(event.target.value)
    };

    const handleUppClick = () => {
        setText(text.toUpperCase());
        props.showAlert("converted to upper case","success");
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("converted to lower case","success");
    };
    const clear = () => {
        setText("");
        props.showAlert("text cleared","success");
    };


    return (
        <>
            <div className="container" style={{color:props.mode === "dark" ?"white" :"black"}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8"  value={text} placeholder="enter your text" onChange={handelOnChange} style={{backgroundColor : props.mode === "dark" ?"black" :"white",color:props.mode === "dark" ?"white" :"black"}}></textarea>
                </div>
                <button className='btn btn-info mx-1 my-1' onClick={handleUppClick} >CONVERT TO UPPERCASE</button>
                <button className='btn btn-info mx-1 my-1' onClick={handleLowClick} >convert to lowercase</button>
                <button className='btn btn-info mx-1 my-1' onClick={clear} >clear</button>
            </div>

            <div className="container mx-3 my-3"style={{color:props.mode === "dark" ?"white" :"black"}}>
                <h3>your text summary:</h3>
                <p>{text.split(" ").filter((ele)=> ele.length !== 0).length} words and {text.length} character</p>
                <p>{0.008 * (text.split(" ").filter((ele)=> ele.length !== 0).length)} minutes to read</p>

                <h2>preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
