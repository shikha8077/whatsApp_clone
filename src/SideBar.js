import React, { useState ,useEffect} from 'react';
import "../src/css/SideBar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Input from '@mui/material/Input';
import SideBarChat from './SideBarChat';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';



function SideBar() {
 const [names, setNames]  = useState([])
 const [addNewChat, setAddNewChat] =  useState(true)
 const [cols, setCols] = useState({})

 

 async function getCities(db) {
  const citiesCol = collection(db, 'name');
  setCols(citiesCol)
  const citySnapshot = await getDocs(citiesCol);
  setNames(citySnapshot.docs.map(doc =>({
        id:doc.id,
        data:doc.data(),
      })))
}

 useEffect(() => {
  return () => {
    getCities(db)
  };



 }, []);


  return (
    <div className='sidebar'>

    <div className='sidebar_header'>
    <AccountCircleIcon style={{color:"gray"}}/>
    <div className='sidebar_headerRight'>
    <IconButton>
    <DonutLargeIcon/>
    </IconButton>
    <IconButton>

    <ChatIcon/>
    </IconButton>
    <IconButton>

    <MoreVertIcon/>
    </IconButton>
    
    </div>
  
   
    </div>
    <div className='sidebar_search'>
    <div className='sidebar_search_container'>
   
    <SearchRoundedIcon/>
    <Input placeholder="Search or start new chat" 
     type='text'   
     disableUnderline={true} 
     />
    </div>
   
    </div>
   
     <div className='sidebar_chat'>
     <SideBarChat addNewChat/>
     {names?.map(name=>(
      <SideBarChat key={name.id}
      id={name.id}
      name={name.data.name}
      />
  ))}
    
    
     </div>
  </div>
  )
}

export default SideBar