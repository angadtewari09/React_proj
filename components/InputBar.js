import React, { useState } from 'react'

function InputBar(props) {

    const [ task, settask] = useState({
        title:'',
        message: ''
    })
    

    //(props.edited.state === true) ? props.edited.name :

  return (
    <div>
        <form className='form'>
            <input
                className='title'
                placeholder='Enter the title...'
                value= { task.title }
                autoCapitalize='sentences'
                autoComplete='off'
                onChange={(e) => {
                    settask({...task, title : e.target.value})
                }}

            />
            <textarea 
                className='textarea'
                placeholder='Enter the message...'
                value={ task.message }
                autoCapitalize='sentences'
                autoComplete='off'
                onChange={(e) => {
                    settask({...task , message : e.target.value})
                }}
            />
            <button 
                className='ButtonArea'
                onClick={(e)=>{
                    if( task.title === '' || task.message === '' ) {
                        alert('Enter a task...')
                        e.preventDefault();
                    }
                    else {
                        e.preventDefault();
                        props.addTask(task )
                      
                        // console.log(task.title , task.message   ); 
                        settask( { title: '' , message: ''})
                    }
                }}>Add</button>
        </form>
    </div>
  )
}

export default InputBar;