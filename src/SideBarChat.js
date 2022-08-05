import React, { useState ,useEffect} from 'react';
import "../src/css/SideBar.css";
import Avatar from '@mui/material/Avatar';
import db from './firebase';
import { addDoc, collection } from 'firebase/firestore/lite';
import { Link ,useParams} from 'react-router-dom';


function SideBarChat({id, name, addNewChat}) {
    const [imgAvtar, seImgAvtar] = useState("")
    const {roomId} = useParams();


      

    useEffect(() => {
        seImgAvtar(Math.floor(Math.random()* 5000))
       
    }, []);

    async function createChat (){
        const roomName = prompt("please enter name for chat")
        console.log(roomName)
        
        if (roomName){
          const cols = collection(db, "name");
          console.log(cols)
          const docRef = await addDoc(cols, {
            name: roomName,
          });
          console.log("Document written with ID: ", docRef.id);
        }


     }

  return !addNewChat ?  (
    <Link to ={`/rooms/${id}`}>
    <div className='sideBar_chat_whatsapp'>
    <Avatar src={`https://avatars.dicebear.com/api/female/${imgAvtar}.svg`}/>
    <div className='sideBar_chat_info'>
     <h2>{name}</h2>
     <p>Last messages...</p>
    </div>
    
    </div>
    </Link>

  ) : (
    <div onClick={createChat} className="sideBar_chat_whatsapp">
    <h2>Add new chat</h2>
    
    </div>
  )
}

export default SideBarChat;