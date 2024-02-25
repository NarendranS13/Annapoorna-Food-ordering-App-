import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Body = () => {
    return (
        <h1 className='headcss'>I am the React 🧑‍🚀</h1>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);