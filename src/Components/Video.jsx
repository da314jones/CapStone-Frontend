export default function Video({ video }){
  const videoSrc = video.signedUrl || '';

  return (
    <div className="video-container">
      <video controls width="250">
        <source src={videoSrc} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
