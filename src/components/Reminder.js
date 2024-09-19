import React,{useState} from 'react'
import './reminder.css'

function Reminder() {

    const [reminder, setReminder] = useState([])
    const [newreminder, setNewreminder] = useState('')

    const handleonchange=(event)=>{
        setNewreminder(event.target.value)
    }

    const addreminder=()=>{
       if(newreminder.trim()){
            setReminder([...reminder,newreminder])
            setNewreminder("")

       }

    }

    const handledelete=(index)=>{
        setReminder(reminder.filter((item,itemindex)=>itemindex != index))
    }

  return (
    <div className='container'>
      <h1 className='heading'>Reminder App</h1>
      <div className='inputcontainer'>
        <input type='text' placeholder='Enter a reminder' onChange={handleonchange} value={newreminder}/>
        <button onClick={addreminder}>Add reminder</button>
        
      </div>
      <ul className='reminder-list'>
            {

                reminder.length==0? <p style={{color:'red',fontWeight:'bold'}}>No reminder found</p> :

                reminder.map((reminder,index)=>(
                    <li key={index}>{reminder}
                    <button onClick={()=>handledelete(index)}>Delete</button>
                    </li>
                ))

                
            }
        </ul>
    </div>
  )
}

export default Reminder
