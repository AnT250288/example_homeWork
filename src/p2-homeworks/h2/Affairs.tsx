import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (affairId: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    /* const setAll = () => {props.setFilter("all")} // need to fix
     const setHigh = () => {props.setFilter("high")}
     const setMiddle = () => {props.setFilter("middle")}
     const setLow = () => {props.setFilter("low")}*/

    const setFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setFilter} className={setClass("all")} value={"all"}>All</button>
            <button onClick={setFilter} className={setClass("high")} value={"high"}>High</button>
            <button onClick={setFilter} className={setClass("middle")} value={"middle"}>Middle</button>
            <button onClick={setFilter} className={setClass("low")} value={"low"}>Low</button>
        </div>
    )
}

export default Affairs
