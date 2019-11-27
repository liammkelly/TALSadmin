import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadEvents, deleteClassEvent } from "../actions/"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { nsend } from "q"

library.add(fab, faTrash)

const mapStateToProps = state => {
    return {
        classEvents: state.classEvents
    }
}

const mapDispatchToProps = {
    deleteClassEvent,
    loadEvents
}


const ConnectedClassList = props => {
    const [selectedEvent, setSelectedEvent] = useState(0)
    
    useEffect(() => {
        props.loadEvents()
    }, [])

    const confirmDelete = event => {
        event.preventDefault()
        
        let selectedId = event.target.dataset.id
        let deleteRow = () => {
            props.deleteClassEvent(selectedId)
        }

        confirmAlert({
            title: 'Confirm',
            message: 'Are you sure you want to delete this scheduled class?',
            buttons: [{
                label: 'Yes',
                onClick: deleteRow
            },{
                label: 'Cancel',
                onClick: () => { /* do nothing */ }
            }],
            closeOnClickOutside: true
        })
    }

    return (
        <ul>
            {props.classEvents.map(el => (
                <li>{el.title} @ {el.start} [ <a href="" key={el.class_event_id} data-id={el.class_event_id} onClick={confirmDelete}>delete</a> ] </li>
            ))}
        </ul>
    )
}

const ClassList = connect(mapStateToProps, mapDispatchToProps)(ConnectedClassList)

export default ClassList