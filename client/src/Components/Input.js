import React from 'react'

export default function Input(props) {

    return (       
        <input        
        id = {props.id}
        name = {props.name}
        onChange = {props.onChange}
        type = {props.type}
        placeHolder={props.ph}
        style={{...defaultStyle, ...props.style}}
        />
    )
}

const defaultStyle = {

    color: 'black',
    backgroundColor: 'white',
    border: 'none',
    padding: 10,
    borderRadius: 5,
    
}
