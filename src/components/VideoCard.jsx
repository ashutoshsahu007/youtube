import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-64 shadow-lg ">
      <img className="rounded-lg" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-medium">{channelTitle}</li>
        <li className="font-medium">
          {statistics.viewCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span> Views</span>
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 border border-red-800">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
