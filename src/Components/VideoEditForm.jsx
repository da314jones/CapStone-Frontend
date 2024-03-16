import React, { useState } from 'react';

export default function VideoEditForm() {
    // const [file, setFile ] = useState(null);
    const [category, setCategory] = useState([]);
    const [topic, setTopic] = useState([]);

    // const handleFileChange = (e) => {
    //     setFile(file);
    // };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleTopicChange = (e) => {
        setTopic(topic);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
  return (
    <div>
      <h2> Update/Edit Video? </h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="file-input">Browse File</label>
            <input type="file" id="file-input" onChange={handleFileChange} accept="*" />
        </div>
        <div>
            <label htmlFor="category-input">Category:</label>
            <select id="category-input" value={category} onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="wood-work">Wood Work</option>
                <option value="tech">Tech</option>
                <option value="fried-cooking">Fried Cooking</option>
                <option value="hunting">Hunting</option>
                <option value="painting">Painting</option>
                <option value="astrology">Astrology</option>
                <option value="gardening">Gardening</option>
                <option value="pastries">Pastries</option>
                <option value="latin-dance">Latin Dance</option>
                <option value="literature">Literature</option>
                <option value="gaming">Gaming</option>
                <option value="economics">Ecomonomics</option>
            </select>
        </div>
        <div>
            <label htmlFor="topic-unit">Topic:</label>
            <input type="text" id="topic-unit" placeholder="Your Topic Here" value={topic} onChange={handleTopicChange} />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

