import {useState} from "react" 
import Blogitems from "./Blogitems"
import './Blogform.css';

function Blogform(){
    const [post, setPost]=useState({title:"",author:"", content:""});
    const [allPost, setAllPost]=useState([]);

    const handleChange=(event)=>{
        const {name, value}=event.target;
        setPost((prev)=>({
            ...prev,[name]: value
     }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!post.title.trim() || !post.author.trim() || !post.content.trim())return;
        setAllPost((prevPosts)=>[...prevPosts,post]);
    }

    const handleDelete = (indexToDelete) => {
    setAllPost(prevPosts => prevPosts.filter((_, index) => index !== indexToDelete));
};

return(
<>
<form onSubmit={handleSubmit} className="form-container">
    Enter title
    <input type="text" name="title" value={post.title} onChange={handleChange}/>
    <br /> <br />
    Enter authorname
    <input type="text" name="author" value={post.author} onChange={handleChange}/>
    <br /> <br />
    Enter content
    <input type="text" name="content" value={post.content} onChange={handleChange} />
    <br /> <br />
    <button type="submit">submit</button>
</form>
<div className="blog-list">
    {allPost.map((item, index)=>(
        <Blogitems key={index} blog={item} onDelete={() => handleDelete(index)}/>
    ))}
</div>

</>
);
}
export default Blogform;