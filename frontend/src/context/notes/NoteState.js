
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = "https://my-notebook-chi.vercel.app";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Get all Notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZDcwOGQyMDBkZWVhMDc2MjRjOTM0In0sImlhdCI6MTcxMTEwOTUwNH0.mPHhKew2TTfRlFKgMuNdyYa6U6GGwSBAI5cexpEsMHc"
                
            }
        });
        const json = await response.json()
        setNotes(json);
    }
    //Add a Note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addNote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZDcwOGQyMDBkZWVhMDc2MjRjOTM0In0sImlhdCI6MTcxMTEwOTUwNH0.mPHhKew2TTfRlFKgMuNdyYa6U6GGwSBAI5cexpEsMHc"
                
            },

            body: JSON.stringify({ title, description, tag }),
        });

        const note = await response.json();
        setNotes(notes.concat(note))
    }

    

    //Delete a Note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZDcwOGQyMDBkZWVhMDc2MjRjOTM0In0sImlhdCI6MTcxMTEwOTUwNH0.mPHhKew2TTfRlFKgMuNdyYa6U6GGwSBAI5cexpEsMHc"
            },
        });
        const json = await response.json();
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
        
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZDcwOGQyMDBkZWVhMDc2MjRjOTM0In0sImlhdCI6MTcxMTEwOTUwNH0.mPHhKew2TTfRlFKgMuNdyYa6U6GGwSBAI5cexpEsMHc"
            },
            body: JSON.stringify({ title, description, tag }),

        });
        const json = await response.json();
        console.log(json);
        //Logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNotes(newNotes);

    }
    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;