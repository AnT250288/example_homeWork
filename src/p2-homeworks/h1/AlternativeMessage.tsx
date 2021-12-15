import React, {ChangeEvent, useState} from 'react'
import s from "./Message.module.css";

type MessageType = {
    id: string
    avatar: string
    name: string
    text: string
    time: string
}

export type AlternativeMessagePropsType = {
    messages: Array<MessageType>
    addText: (avatar:string, name: string, text: string, time:string ) => void
}

export function AlternativeMessage(props: AlternativeMessagePropsType) {
    let [text, setText] = useState("")
    const onClickHandler = () => {
        //@ts-ignore
        props.addText(text.trim())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <div>
            <input value={text} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>add message</button>
            <div>
                {
                    props.messages.map(m => {
                        return (<li key={m.id}>
                            <div className={s.message}>
                                <img src={m.avatar} alt={'avatar'} className={s.avatar}/>
                                <div className={s.corner}/>
                                <div className={s.content}>
                                    <div className={s.name}>{m.name}</div>
                                    <div className={s.messageText}>{m.text}</div>
                                    <div className={s.time}>{m.time}</div>
                                </div>
                            </div>
                        </li>)
                    })
                }
            </div>
        </div>
    )
}
