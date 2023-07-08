import { computeHeadingLevel } from '@testing-library/react';
import React, { useState , useEffect } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import uuid from 'react-uuid';
function Dashboard(props) {
  const date = new Date(Date.now()).toDateString();
  const newDate = date.replace(" ", ", ")
  

  //console.log( props )
  const[ modal , setmodal ] = useState(false)

  const[ newTask , setnewTask ] = useState({
      name: props.title,
      content: props.message,
      id: props.id
  })
  const [Palette, setPalette] = useState(false);

  const [ color , setcolor ] = useState('#fff')


//   const getName=(index)=> {
//     console.log( color_palette[index] )
// }
const colors = document.querySelector("#colors")
const StickyNote = document.querySelector(".StickyNote")

function getIndex( id , val )
{
  props.setColor( id ,val );
}
  let state = false;
  return (
    <div className="StickyNote" style={ { backgroundColor: 'white'} }>
    <h1 id="NoteTitle">
        {props.title}
    </h1>
    <div className="TaskArea">
       <div className="ScrollArea">
            <p id="NoteContent">
                {props.message}
            </p>
       </div>
        <div className="ButtonPlace">
        <small className="CurrentDate">{newDate}</small>
            
            {/* <button id="icons2" onClick={() => {
              props.editNote( props.id )
              
            }}  
              className="fa fa-edit"></button> */}

              
            <button id="icons2" onClick={(e) => { e.preventDefault(); setPalette(!Palette)} } className="fa fa-paint-brush"></button>  
            <div className={ Palette ? 'color_list unlocked' : 'color_list locked'}>
              <select name="" id="colors" onClick={(e) => { e.preventDefault() ; getIndex( props.id , colors.value )} }>
                <option value='pink'>Pink</option>                                      {/*#f28b82 */}
                <option value=' Blue'>Blue</option>
                <option value='yellow'>Yellow</option>                                  {/*#fff475*/}
                <option value='red'>Reef</option>                                       {/*#ccff90 */}
                <option value='cyan'>Cyan</option>                                      {/*#a7ffeb*/}
                <option value='lily'>Lily</option>                                      {/*#cbf0f8 */}
              </select>
            </div>
            
              <button id="icons2" onClick={() => {
                props.editNote( !state , props.id  )
            }}  
              className="fa fa-edit"></button>

            <button id="icons2" onClick={() => {
              props.deleteNote(props.id)
            }} className="fa fa-trash"></button>
            
        </div>
    </div>
</div>
  )
}

export default Dashboard





   {/* <ul className={ Palette ? 'color_list unlocked' : 'color_list locked'}>
                        {
                          color_palette.map((item, index) => (
                                <li
                                    id={index}
                                    key={index}
                                    className = "ColorListItem"
                                    style={{backgroundColor: item , color: item}}
                                    onClick={ console.log( key ) }></li>
                        ))}
            </ul>  */}