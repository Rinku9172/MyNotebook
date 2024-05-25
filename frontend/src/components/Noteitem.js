import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import '../App.css'; // Import external CSS file

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card card-notes">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                       
                        <p className="card-number">Note {props.index + 1}</p>
                        
                    </div>
                    
                    <h5 className="card-title">
                        <span>{note.title}</span>
                        <i className="fa-regular fa-pen-to-square mx-2 edit-icon" onClick={() => { updateNote(note) }}></i>
                        <i className="fa-sharp fa-regular fa-trash-can mx-2 delete-icon" onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "success") }}></i>
                    </h5>
                    
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
