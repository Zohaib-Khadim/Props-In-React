import React, { useState } from "react";

const Childtest = ({ onDataReceived }) => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("failure");
    } else {
      console.log("success");
      if (editIndex !== -1) {
        const updatedPosts = [...posts];
        updatedPosts[editIndex] = input;
        setPosts(updatedPosts);
        setEditIndex(-1);
      } else {
        setPosts([...posts, input]);
      }
      setInput("");
      // Send data to the parent
      onDataReceived(input);
    }
  };

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const editPost = (index) => {
    setInput(posts[index]);
    setEditIndex(index);
  };

  return (
    <div className="container ms-5">
      <div className="row">
        <div className="col-4">
          <form action="" id="form">
            <h1>Social Media App</h1>
            <div className="left">
              <p>Write Your Post</p>
              <textarea
                name="input"
                value={input}
                onChange={handleInput}
                id="input"
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button onClick={handleBtn} className="btn btn-primary">
                {editIndex !== -1 ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="right">
            <h3>Your Posts Are</h3>
            <div id="posts" className="posts">
              {posts.map((post, index) => (
                <div key={index} className="post">
                  <p>{post}</p>
                  <i
                    onClick={() => deletePost(index)}
                    className="fa-sharp fa-solid fa-trash"
                  ></i>
                  <i
                    onClick={() => editPost(index)}
                    className="fa-solid fa-pen-to-square ms-3"
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Childtest;
