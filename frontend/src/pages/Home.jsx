import {useState, useEffect, cache} from 'react'
import api from "../api.js"
import {data} from "react-router-dom";
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect( () => {
        getNotes();
    }, [])
    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => { setNotes(data) ; console.log(data)} )
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 200) alert("Note deleted successfully.");
                else alert("Failed to delete note.");
            })
            .catch(err => alert(err));
        getNotes();
    }

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", {content, title})
            .then((res) => {
                if (res.status === 200) alert("Note created successfully.");
                else alert("Failed to create note.");
            })
            .catch((err) => alert(err));
        getNotes();
    }

    return <div>
        <div>
            <h2>Notes</h2>

        </div>
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label htmlFor="content">Content:</label>
            <br />
            <textarea
                id="content"
                name="content"
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default Home;