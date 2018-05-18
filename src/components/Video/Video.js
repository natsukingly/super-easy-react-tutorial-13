import React from 'react';

const Video = (props) => {

  if(!props.video){
    return (
      <div className="video col-md-8">
        動画を読み込み中でーす。
      </div>
    );
  }

  const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

  return (
    <div className="video col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}></iframe>
      </div>
      <div className="info">
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default Video;
