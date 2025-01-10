import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, updatePost } from '../services/postService';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const post = await getPostById(id);
                setTitle(post.title);
                setBody(post.body);
            } catch (error) {
                alert('Failed to fetch post');
            }
        };
        fetchPost();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedPost = await updatePost(id, { title, body });
            alert('Post updated successfully: ' + JSON.stringify(updatedPost));
        } catch (error) {
            alert('Failed to update post');
        }
    };

    return (
        <form onSubmit={handleUpdate} className="p-4">
            <div className="mb-4">
                <label>Title</label>
                <input 
                    type="text" 
                    className="border p-2 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label>Body</label>
                <textarea 
                    className="border p-2 w-full"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Update Post
            </button>
        </form>
    );
};

export default EditPost;
