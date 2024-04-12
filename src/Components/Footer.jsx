import React from 'react'

export default function Footer() {
//   const carousel = document.querySelector('.carousel');

// carousel.addEventListener('scroll', () => {
//   const videos = document.querySelectorAll('.video-container');
//   videos.forEach(video => {
//     const rect = video.getBoundingClientRect();
//     if (rect.left >= 0 && rect.right <= window.innerWidth) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   });
// });

  // const [videoSamples, setVideosSamples] = useState([]);


  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch(`${API}/s3/list`);
  //       const data = await response.json();
  //       console.log("Fetched videos:", data);
  //       setVideos(data.videoWithSignedUrls || []);
  //     } catch (error) {
  //       console.error("Error fetching videos:", error);
  //     }
  //   };
  //   fetchVideos();
  // }, []);

  return (
<div className="carousel">
  <video className="video" src="https://www.youtube.com/watch?v=hyz6XFzJ0b4&pp=ygUeaG93IHRvIGRlbGV0ZSBmYWNlYm9vayBhY2NvdW50"></video>
  <video className="video" src="https://www.youtube.com/watch?v=miylYeilOIo&pp=ygUdaG93IHRvIGdldCByaWQgb2Ygc3BhbSBlbWFpbHM%3D"></video>
  <video className="video" src="https://www.youtube.com/watch?v=x3jyRce0aDc&pp=ygUgaG93IHRvIHN0b3Agc3BhbSBjYWxscyBvbiBpcGhvbmU%3D"></video>
</div>

  
  )
}

// code below is same as will be needed to render sample videos to footer  
// only needs 3 limit logic or add to carousel
// return (
//     <div className="main-container">
//       {videos.map((video, index) => (
//         <div key={index} className="video-card">
//           <video width="1280" height="720" controls>
//             <source src={video.signedUrl} type="video/mp4" />
//             Your Browser does not support the video tag.
//           </video>
//           <div className="video-info"></div>
//           <div className="video-title"></div>
//           <div className="video-creator"></div>
//         </div>
//       ))}
//     </div>
//   );
// }
