
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import StyledModal from "styled-react-modal";
import "./VideoNewForm.css";

// const API = import.meta.env.VITE_API_URL;

// export default function VideoNewForm({ onSubmitSuccess, archiveId, archiveUrl, videoId }) {
//   const [videoMeta, setVideoMeta] = useState({
//     category: "",
//     title: "",
//     summary: "",
//     ai_summary: "",
//     is_private: true
//   });
//   const navigate = useNavigate();

//   const user_id = sessionStorage.getItem("userUID");

  

//   useEffect(() => {
//     setVideoMeta((prevVideo) => ({ ...prevVideo, video_url: archiveUrl }));
//   }, [archiveUrl]);

 
//   const handleTextChange = (e) => {
//     setVideoMeta({ ...videoMeta, [e.target.id]: e.target.value });
//   };

//   const isValidMetadata = (videoMeta) => {
//     return (
//       videoMeta.category?.trim() !== "" &&
//       videoMeta.title?.trim() !== "" &&
//       videoMeta.summary?.trim() !== ""
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!archiveId) {
//       console.error('Archive ID is undefined.');
//       alert('Archive ID are required for submission.');
//       console.log(archiveId)
//       return;
//     }
  
//     try {
//       console.log("Submitting form data:", { ...videoMeta, archiveId });
//       const response = await fetch(`${API}/videos/uploadVideo/${archiveId}`, {
//         method: "POST",
//         body: JSON.stringify({ ...videoMeta, archiveId, user_id }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Failed to add videoMetaObject: ${errorText}`);
//       }
//       const data = await response.json();
//       console.log("MetaDataObject added:", data);
//       onSubmitSuccess();  // Optional: Navigate away or clear form here.
//     } catch (error) {
//       console.error("Error submitting metaDataObject:", error);
//       alert(`Submission failed: ${error.message}`);
//     }
//   };



  

//   return (
//     <>
//       <div className="container mx-auto mt-8">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-md mx-auto bg-pink-300 text-black p-2 rounded shadow-md"
//         >
//           <label htmlFor="category">Category:</label>
//           <input
//             id="category"
//             value={videoMeta.category}
//             type="text"
//             onChange={handleTextChange}
//             placeholder="Enter Category..."
//             required
//             className="form-input mb-4"
//             style={{ width: "100%", marginBottom: "1rem" }}
//           />

//           <label htmlFor="title">Title:</label>
//           <input
//             id="title"
//             value={videoMeta.title}
//             type="text"
//             onChange={handleTextChange}
//             placeholder="Enter Title..."
//             required
//             className="form-input mb-4"
//             style={{ width: "100%", marginBottom: "1rem" }}
//           />

//           <label htmlFor="summary">Summary:</label>
//           <input
//             id="summary"
//             value={videoMeta.summary}
//             type="text"
//             onChange={handleTextChange}
//             placeholder="Describe the video..."
//             required
//             className="form-input mb-4"
//             style={{ width: "100%", marginBottom: "1rem" }}
//           />

//           <div>
//             <button
//               type="submit"
//               className="bg-pink-300 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-black active:bg-black-800"
//             >
//               Add Video
//             </button>
//           </div>
//         </form>
//         {/* <button onClick={onClose} className="close-button">
//           Close Form
//         </button> */}
//       </div>
//     </>
//   );
// }
