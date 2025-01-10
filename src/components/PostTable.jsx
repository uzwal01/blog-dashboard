import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, deletePost } from "../services/postService";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        alert("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, []);

  const handleCreate = () => {
    navigate(`/create`);
  };

  const handleView = (id) => {
    navigate(`/post/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      try {
        await deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
        alert("Post deleted successfully");
      } catch (error) {
        alert("Failed to delete post");
      }
    }
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Posts</h2>
        <button
          onClick={handleCreate} // Changed to navigate to "/create"
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Create Post
        </button>
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-black-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="border px-4 py-2">{post.id}</td>
                <td className="border px-4 py-2">{post.title}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleView(post.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(post.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostTable;
