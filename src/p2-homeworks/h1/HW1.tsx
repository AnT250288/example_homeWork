import React, {useState} from 'react'
import Message, {MessagePropsType} from "./Message";
import {v1} from "uuid";

const messageData: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    let [message, setMessage] = useState([
        {
            id: v1(),
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
            name: 'Name',
            text: 'This is new text',
            time: '22:00',
        },
    ])
    let messages = message

    function addText(avatar: string, name: string, text: string, time: string) {
        let newText = {id: v1(), avatar: avatar, name: name, text: text, time: time};
        setMessage([newText, ...message])
    };


    return (
        <div>
            <hr/>
            homeworks 1

            {/*   should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>

           {/* <AlternativeMessage
                messages={messages}
                addText={addText}
            />*/}
            <hr/>
        </div>
    )
}

export default HW1
