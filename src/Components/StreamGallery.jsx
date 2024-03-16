import React from 'react'

export default function UserVideoGallery({ userStreams }) {
  return (
    <div>
      <h2>My Video Gallery</h2>
      {userStreams.map(stream => (
        <StreamCard key={stream.id} stream={stream} />
      ))}
    </div>
  )
}
