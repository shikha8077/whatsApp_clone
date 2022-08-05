import React, { useState, useEffect } from "react";
import "../src/css/Chat.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { useParams } from "react-router-dom";
import { collection, getDocs, doc, } from 'firebase/firestore/lite';
import { onSnapshot } from "firebase/firestore";
import db from "./firebase";



function Chat() {
  const [imgAvtar, seImgAvtar] = useState("");
  const [input ,setInput] = useState()
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
 
   async function getSingleChat(roomId){
    console.log()
    const citiesCol = collection(db, 'name');
    const citySnapshot = await getDocs(citiesCol);
    let room = citySnapshot.docs.filter((doc) => (
      doc.id === roomId
    ))
    if(room.length > 0){
      setRoomName(room[0].data().name)
    }

   }


  useEffect(() => {
   if(roomId){
    getSingleChat(roomId)
   }
  }, [roomId]);



  // useEffect(() => {
  //   setRoomName(Math.floor(Math.random()* 5000))
  // }, [roomId]);

  const sendMessage =(e)=>{
    // e.target.preventDefault();
    e.preventDefault();
    console.log("you typed", input)
    setInput("")

  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/female/${`imgAvtar`}.svg`}
        />

        <div className="chat_header_info">
          <h3> {roomName}</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
      <p className={`chat_message ${true && "chat_receiver"}`}>

      <span className="chat_name">Shikha</span>
      Hey Guys 

      <span className="chat_timestamp">3.52pm</span>
      </p>
      
      </div>
      <div className="chat_footer">
      <InsertEmoticonIcon/>
      <form>
       <input 
       value={input}
       onChange={(e)=>setInput(e.target.value)}
       placeholder="Type a message"
       type="text"/>
       <button onClick={sendMessage} type="Submit"> Send a message</button>
      </form>   
      <MicNoneIcon/>
      </div>
    </div>
  );
}

export default Chat;
