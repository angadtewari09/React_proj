import React, { useState } from "react"
import './components/App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import InputBar from "./components/InputBar";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


function App() {

  const [ Todo, setTodo] = useState([])
  const[ modal , setmodal ] = useState(false)

  const[ editID , seteditID ] = useState(null)

  const[ newValue , setnewValue ] = useState({
    name: '' ,
    content: ''
  })

  const[ oldValue , setoldValue ] = useState({
    name: '' ,
    content: ''
  })
  const [oldID, setoldID] = useState(null)



//Function to add Notes
function addTask( note ) {
    setTodo( [...Todo , note] )
    //console.log( note)
}

//Function to delete those notes
function onDelete( id ) {
  
  setTodo( prevNote => {
    return[...prevNote.filter((note , index) => 
      index !== id )]
  })
  
}

//Function to edit those notes
function onEdit( state , id ) {
  setoldValue( {title: Todo[id].title , message: Todo[id].message} )
  console.log(state)
  setmodal( state)
  seteditID( id )
  setoldID(id)
}

const color_palette = ["#f28b82" ,"#fbbc04", "#fff475" , "#ccff90" , "#a7ffeb" , "#cbf0f8" , "#aecbfa" , "#d7aefb" ] // "#fdcfe8", "#e6c9a8","#e8eaed"]

const [ color, setcolor] = useState([])
const[ getColor , setgetColor ] = useState("red");



function setColor( id , val ) 
{
  const newArray = [...color];
  newArray[ id ] = val
  setcolor( newArray )
  console.log( id , color )
}


  return (
    <div>
      <Header/>
      
      {/* <Popup/> */}
     { 
       modal && (
        <Modal size='lg' isOpen={modal} >                                                 {/*toggle={()=> setmodal(!modal ) } Add this to make the modal background work*/}
              <ModalHeader toggle={() => setmodal(!modal)}>
                Edit task
              </ModalHeader>
              <ModalBody>
                <form className='newForm'>
                  <input

                  placeholder={oldValue.title}
                  
                  autoCapitalize='off'
                  autoComplete='off'
                  onChange={(e) => {
                    setnewValue({...newValue, title: e.target.value})
                      console.log(e.target.value)
                  }}

              />
              <textarea 
                  placeholder={ oldValue.message}
                  autoCapitalize='off'
                  autoComplete='off'
                  onChange={(e) => {
                    setnewValue({...newValue, message: e.target.value})
                      console.log(e.target.value)
                  }}
              />
               <button className='btn mt-3' style={{ backgroundColor: '#0b3629' , color: 'white'}} 
                onClick={(e)=> { 
                  
                  //alert( `${newTask.name} ${newTask.content}`) ;
                  e.preventDefault();
                  setmodal(false)
                  console.log( newValue.title , newValue.message )
                  addTask( newValue )
                  onDelete(oldID)
                }}
                > Submit </button>
                </form>
              </ModalBody>
            </Modal>
       )
     }
      <InputBar addTask={addTask} />
      <div className="StickyArea">
      {
        Todo.map( ( note , index ) => {
          return(
            <Dashboard 
              id={index}
              title={note.title}
              message={note.message}
              setColor={setColor}
              color={getColor}
              editNote={onEdit}
              deleteNote={onDelete}
              addTask={addTask}
            />
          )
        })
      }
      </div>

    </div>
  )
}

export default App;