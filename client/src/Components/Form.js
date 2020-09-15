import React from 'react'
import Input from './Input'
import Button from './Button' 

export default function Form(props) { //inputs=Array(of Objs)

    const btn_onClick = () => {
        props.submitFunc(document.getElementById(props.id))
    }

    return (
        <div>
        <h2>
            {props.title}        
        </h2>
            <form
            onSubmit={false}
            >

            {
                Array.isArray(props.inputs)                         
                ? props.inputs.map ( inProps => {
                    return (
                        <Input

                        name={inProps.name}
                        ph={inProps.ph}
                        type={inProps.type}
                        style={inProps.style}
                        id={inProps.id}
                        onChange={inProps.onChange}
                        />                        
                    )
                })
                : 'Dev Warning! No Inputs, Check Code'            
            }

            </form>

            <Button
            text='Submit'
            onClick={btn_onClick}
            />
        </div>
    )
}
