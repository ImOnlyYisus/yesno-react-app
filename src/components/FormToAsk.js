import React from 'react'

import { CgDice5 } from "react-icons/cg";

const FormToAsk = ({ handleSubmit }) => {
    const reset = ()=>{
        document.getElementById("texto").value ="";
    }

    return (<>
        <div className="contenedor-form">
            <form onSubmit={handleSubmit} className="form-group" autoComplete='off'>
                <input type="text" placeholder='Write something..' name='input' id="texto"/>
                <button><CgDice5 /></button>
            </form>

            <button className='reset' onClick={reset}>Reset</button>
        </div>

    </>
    )
}

export default FormToAsk