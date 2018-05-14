import React from 'react';

const Item = (props) => {
  console.log("Propsを受け取りました");
  console.log(props);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="mr-3" src={props.video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <h5 className="media-heading">{props.video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
}

export default Item;
