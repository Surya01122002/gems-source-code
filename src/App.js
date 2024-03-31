import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ypapi.formz.in/api/public/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
        setVideos([
          {
            "title": "Xiaomi 14 Ultra vs Samsung Galaxy S24 Ultra.",
            "thumbnail": "https://i.ytimg.com/vi/4QJq2h8tCv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmTt_MT3QR2KqVsFKUFQZ9gIkTCA",
            "channelPicture": "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Mrwhosetheboss",
            "category": "tech",
            "duration": "23:56",
            "views": "15,219",
            "uploadedDateTime": "2024-03-27T15:05:10.146Z"
          },
          {
            "title": "I bought the most UNBREAKABLE Tech Ever!",
            "thumbnail": "https://i.ytimg.com/vi/BiZcyJPoDy0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCayA4OMcH05hJerRluzg1B3BhVPw",
            "channelPicture": "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Mrwhosetheboss",
            "category": "tech",
            "duration": "23:56",
            "views": "3,943,356",
            "uploadedDateTime": "2024-02-21T18:05:10.146Z"
          },
          {
            "title": "I bought the CHEAPEST Tech in India!",
            "thumbnail": "https://i.ytimg.com/vi/LdlLUogNYMw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGoYZTxoR_6vForcNZBn0cpOnEw",
            "channelPicture": "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Mrwhosetheboss",
            "category": "tech",
            "duration": "37:48",
            "views": "8,753,456",
            "uploadedDateTime": "2024-01-11T18:05:10.146Z"
          },
          {
            "title": "How the Most Expensive Swords in the World Are Made",
            "thumbnail": "https://i.ytimg.com/vi/Tt6WQYtefXA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL1Pq7GYati5BIagiz5Uukag-hFw",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Veritasium",
            "category": "tech",
            "duration": "25:34",
            "views": "4,956,457",
            "uploadedDateTime": "2024-03-01T15:05:10.146Z"
          },
          {
            "title": "Why It Was Almost Impossible to Make the Blue LED",
            "thumbnail": "https://i.ytimg.com/vi/AF8d72mA41M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLwVnlchInSJ-zCNZFncLfWBBDA",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Veritasium",
            "category": "tech",
            "duration": "30:34",
            "views": "59,758,786",
            "uploadedDateTime": "2024-03-09T15:05:10.146Z"
          },
          {
            "title": "The Fastest Maze-Solving Competition On Earth",
            "thumbnail": "https://i.ytimg.com/vi/ZMQbHMgK2rw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZEj12pKAV_MrsSafc1lz_2HCNlg",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Veritasium",
            "category": "tech",
            "duration": "25:21",
            "views": "17,888,658",
            "uploadedDateTime": "2024-01-19T15:05:10.146Z"
          },
          {
            "title": "Playing in hardcore mode",
            "thumbnail": "https://i.ytimg.com/vi/XoIOlRnwpio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBjtRXIGOoslkwQr-XUAuEjK7PUA",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_noBXoCmJA3QZ1CS71nl2PCYlYU8ihd7DgIrbXtbg=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Viva La Dirt League",
            "category": "gaming",
            "duration": "3:28",
            "views": "138,253",
            "uploadedDateTime": "2024-03-26T15:05:10.146Z"
          },
          {
            "title": "SHROUD REACTS TO ALL THE NEW VALORANT AGENT ABILITIES",
            "thumbnail": "https://i.ytimg.com/vi/9Cqn-QC8rms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk73HuLWkBQB2rOcmW_Ky2uO-hGg",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_niY5P7XbsaAxlxeBMARgIEsVq6sHNOkZMKFyolrQ=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Shroud",
            "category": "gaming",
            "duration": "32:28",
            "views": "198,987",
            "uploadedDateTime": "2024-02-17T15:05:10.146Z"
          },
          {
            "title": "Shroud Reacts To BattleFailed 2042",
            "thumbnail": "https://i.ytimg.com/vi/OulJoV3CsJE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeMhi8lsBHctnFR2w6WFctp3gsyQ",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_niY5P7XbsaAxlxeBMARgIEsVq6sHNOkZMKFyolrQ=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Shroud",
            "category": "gaming",
            "duration": "31:28",
            "views": "298,283",
            "uploadedDateTime": "2024-03-20T15:05:10.146Z"
          },
          {
            "title": "Dosi & Aisake - Cruising | Lofi | NCS - Copyright Free Music",
            "thumbnail": "https://i.ytimg.com/vi/qjElWBGZou4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGyJw_3EgwK7SRJ_VsVnQHiAtVow",
            "channelPicture": "https://yt3.ggpht.com/YIBi8NVC87fMfJHfQ2O0dyzjis7tUlO7VqWLhk1lq1fkIOQTrpX_Ip7G6S_u0IJosXYSe_Z9=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "NoCopyrightSounds",
            "category": "music",
            "duration": "2:41",
            "views": "46,283",
            "uploadedDateTime": "2024-03-21T15:05:10.146Z"
          },
          {
            "title": "NCS: The Best Of Dubstep Mix | NCS - Copyright Free Music",
            "thumbnail": "https://i.ytimg.com/vi/T__q1htHmN4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgVIFEofzAP&rs=AOn4CLBaFd1Hz7EsgV0a2hzNcAEKvbQ0hA",
            "channelPicture": "https://yt3.ggpht.com/YIBi8NVC87fMfJHfQ2O0dyzjis7tUlO7VqWLhk1lq1fkIOQTrpX_Ip7G6S_u0IJosXYSe_Z9=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "NoCopyrightSounds",
            "category": "music",
            "duration": "42:35",
            "views": "46,283",
            "uploadedDateTime": "2024-03-22T15:05:10.146Z"
          }
        ]);
        setLoading(false);
      });
  }, []);

  function timeAgo(date) {
    const currentDate = new Date();
    const uploadedDate = new Date(date);

    const timeDifference = currentDate.getTime() - uploadedDate.getTime();
    const seconds = Math.round(timeDifference / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(days / 30);
    const years = Math.round(days / 365);

    if (seconds < 60) {
      return "Just now";
    } else if (minutes < 60) {
      return minutes + " minute" + (minutes > 1 ? 's' : '') + " ago";
    } else if (hours < 24) {
      return hours + " hour" + (hours > 1 ? 's' : '') + " ago";
    } else if (days < 7) {
      return days + " day" + (days > 1 ? 's' : '') + " ago";
    } else if (weeks < 4) {
      return weeks + " week" + (weeks > 1 ? 's' : '') + " ago";
    } else if (months < 12) {
      return months + " month" + (months > 1 ? 's' : '') + " ago";
    } else {
      return years + " year" + (years > 1 ? 's' : '') + " ago";
    }
  }

  function formatViews(views) {
    const viewsInt = parseInt(views.replace(/,/g, ''), 10);

    if (viewsInt >= 1000000) {
      return (viewsInt / 1000000).toFixed(1) + 'M';
    } else if (viewsInt >= 1000) {
      return (viewsInt / 1000).toFixed(0) + 'K';
    } else {
      return viewsInt.toString();
    }
  }

  const categories = ['All', ...new Set(videos.map(video => video.category))];

  let filteredVideos = videos.filter(video => activeCategory === 'All' || video.category === activeCategory);

  if (searchQuery) {
    filteredVideos = filteredVideos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="App">
      <nav className="top-navbar">
        <div className="logo">Logo</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <button><i className="fas fa-search"></i></button>
        </div>
      </nav>
      <div className="category-bar">
        {categories.map((category, index) => (
          <button key={index} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>
        ))}
      </div>
      <div className="video-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          filteredVideos.map((video, index) => (
            <div key={index} className="video-card">
              <img src={video.thumbnail} alt={video.title} />
              <div className="duration">{video.duration}</div>
              <div className="title">{video.title}</div>
              <div className="video-info">
                <img src={video.channelPicture} alt={video.channelName} />
                <div className="details">
                  <div className="channel-name">{video.channelName}</div>
                  <div className="views">{formatViews(video.views)} views . {timeAgo(video.uploadedDateTime)}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
