import React,{useState,useEffect} from 'react'
import './Chat.css'

import {Avatar,IconButton} from '@material-ui/core'
import SearchOutlined  from '@material-ui/icons/Search'
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert'

import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
const Chat = () => {

    const [seed ,setSeed]=useState("");
    const [input, setInput] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage =(e)=> {
e.preventDefault();
console.log("you typed",input);
setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
               <div className="chat__headerInfo">
                   <h3>Room Name</h3>
                   <p>Last Seen.....</p>
               </div>
               <div className="chat__headerRight">
                          <IconButton>
                              <SearchOutlined />
                          </IconButton>

                          <IconButton>
                              <AttachFile />
                          </IconButton>

                          <IconButton>
                              <MoreVert />
                          </IconButton>
               </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                <span className="chat__name">Santhoshkumar</span>
                    hey guys
                    <span className="chat__timestamp">3:52 pm</span>
                </p>
             
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                     value={input}
                     onChange={(e)=>setInput(e.target.value)}
                     type="text" />
                    <button onClick={sendMessage}
                    type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat