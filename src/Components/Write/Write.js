import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import "./write.scss";

const Write = () => {

        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");
        const [file, setFile] = useState(null);
        const { loggedInUser } = useContext(UserContext);

        const handleSubmit = async (e) => {
            e.preventDefault();
            const newPost = {
            username: loggedInUser.username,
            title,
            desc,
            };
            
            if (file) {
            const data =new FormData();
            data.set("key", "bd4c105de11429260d1038b73f7d85c7");
            data.append("image", data.image[0]);
            try {
                const res = await axios.post(
                    "https://api.imgbb.com/1/upload",
                    data
                  );
                  newPost.photo = res.data.data.display_url;
            } catch (err) {}
            }
            try {
            const res = await axios.post("https://peaceful-refuge-93681.herokuapp.com/posts", newPost);
            window.location.replace("https://peaceful-refuge-93681.herokuapp.com/post/" + res.data._id);
            } catch (err) {}
        };
    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="writeInput"
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
                />
                </div>
                <div className="writeFormGroup">
                <textarea
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeText"
                    onChange={e=>setDesc(e.target.value)}
                ></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                Publish
                </button>
            </form>
        </div>
    )
}

export default Write
