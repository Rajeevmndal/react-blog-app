import './Blogform.css';
function Blogitems({blog, onDelete}){
   return(
    <div className="blog-item">
        <h3>{blog.title}</h3>
        <h3>{blog.author}</h3>
        <h4>{blog.content}</h4>
         <button onClick={onDelete} style={{color: "white", backgroundColor: "red", border: "none", padding: "5px 10px"}}>
        Delete
      </button>
    </div>
   )
}
export default Blogitems;