import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../services/postService';

const ViewPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostById(id);
                setPost(data);
            } catch (error) {
                alert('Failed to fetch post');
            }
        };
        fetchPost();
    }, [id]);

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this post?');
        if (confirmed) {
            try {
                await deletePost(id);
                alert('Post deleted successfully');
                navigate('/'); // Redirect to home page or other page after deletion
            } catch (error) {
                alert('Failed to delete post');
            }
        }
    };

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
            <div className="mt-4">
                <button
                    onClick={handleEdit}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ViewPost;
