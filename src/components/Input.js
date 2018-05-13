import React from 'react';

const Input = (props) => {
  let input;
  switch(props.inputType) {
    case "category":
      input = 
        <div>
        <h2>Choose category</h2>
      	<input 
            type='text'
            value= {props.text}
            name=''
            onKeyDown = {props.handleSubmit}
            onChange = {props.updateText}
        />
        </div>;
      break;
    case "annat":
      input = 
      <div>
        <legend >Annat</legend>
      	<input 
            type='text'
            value= {this.state.text}
            name=''
            onKeyDown = {this.handleSubmit}
            onChange = {this.updateText}
        />
        </div>;
      break;
    case "tredje":
      input = 
      <div>
        <legend >Tredje</legend>
      	<input 
            type='text'
            value= {this.state.text}
            name=''
            onKeyDown = {this.handleSubmit}
            onChange = {this.updateText}
        />
        </div>;
      break;
      default:
      break;
  }

	//binder klick till komponenten Button.js
 
    return (
        <div className='input'>
        <h2>Choose category</h2>
      	<input 
            type='text'
            value= {props.text}
            name=''
            onKeyDown = {props.handleSubmit}
            onChange = {props.updateText}
        />
        </div>
    );
}


export default Input;