import React, { useState } from 'react';
import { createPost } from '../services/postService';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await createPost({ title, body });
            alert('Post created successfully: ' + JSON.stringify(newPost));
        } catch (error) {
            alert('Failed to create post');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
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
                Create Post
            </button>
        </form>
    );
};

export default CreatePost;
