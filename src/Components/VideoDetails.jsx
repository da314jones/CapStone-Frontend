// VideoDetails.jsx - 
import {React, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

export default function VideoDetails() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API}/videos/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setVideo(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [id, API]);
  const deleteVideo = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/videos/${id}`, httpOptions)
      .then(() => navigate(`/videos`))
      .catch((error) => console.log(error));
  };
  const handleDelete = () => {
    deleteVideo();
  };
  return (
    <div>
      <article>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <div className="video-navigation">
            {/* Still deciding on the Edit Page */}
          {/* <div>
            <Link to={`videos/${id}/edit`}>
              <button>Edit Video</button>
            </Link>
          </div> */}
          <div>
            <button onClick={handleDelete}>Delete Video</button>
          </div>
        </div>
      </article>
    </div>
  );
}
