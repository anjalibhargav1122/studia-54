import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { BrowserRouter , Routes, Route } from'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App







// // import React, { useRef, useState } from "react";

// // const HoverVideo = () => {
// //     const videoRef = useRef(null); // Ref for the video element
// //     const [isPlaying, setIsPlaying] = useState(false); // State to toggle play/pause

// //     // Function to play the video on hover or click
// //     const handlePlayVideo = () => {
// //         if (videoRef.current) {
// //             videoRef.current.play();
// //             setIsPlaying(true);
// //         }
// //     };

// //     // Function to pause the video on mouse leave (optional)
// //     const handlePauseVideo = () => {
// //         if (videoRef.current) {
// //             videoRef.current.pause();
// //             setIsPlaying(false);
// //         }
// //     };

// //     return (
// //         <div className="relative w-full h-[400px] max-w-3xl mx-auto overflow-hidden group cursor-pointer">
// //             {/* Video element */}
// //             <video
// //                 ref={videoRef}
// //                 src="https://devstudia54comadminstrapi.studia-54.group/uploads/PREVIEW_800_500_999f5a49ea.mp4" // Replace with your video file path
// //                 className={`w-full h-full object-cover ${isPlaying ? "opacity-100" : "opacity-0"}`}
// //                 loop
// //                 muted
// //                 playsInline
// //             ></video>

// //             {/* Placeholder Image */}
// //             {!isPlaying && (
// //                 <img
// //                     src="https://devstudia54comadminstrapi.studia-54.group/uploads/team_9b1f61c017.webp?t=1734412492835" // Replace with your thumbnail image
// //                     alt="Thumbnail"
// //                     className="w-full h-full object-cover absolute top-0 left-0"
// //                 />
// //             )}

// //             {/* Hover/Click Overlay */}
// //             <div
// //                 onClick={handlePlayVideo}
// //                 onMouseEnter={handlePlayVideo}
// //                 onMouseLeave={handlePauseVideo}
// //                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //             >
// //                 <span className="text-white text-2xl font-bold">
// //                     {isPlaying ? "" : "▶ Click or Hover to Play"}
// //                 </span>
// //             </div>
// //         </div>
// //     );
// // };

// // export default HoverVideo;







