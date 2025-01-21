import React, { createContext, useState, useContext } from "react"

const VideoContext = createContext()

export const useVideoContext = () => useContext(VideoContext)

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([])
  const [categories, setCategories] = useState(["Frontend", "Backend", "Innovación", "Gestión"])

  const addVideo = (video) => {
    setVideos([...videos, video])
  }

  const updateVideo = (id, updatedVideo) => {
    setVideos(videos.map((video) => (video.id === id ? updatedVideo : video)))
  }

  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id))
  }

  const addCategory = (category) => {
    setCategories([...categories, category])
  }

  return (
    <VideoContext.Provider value={{ videos, categories, addVideo, updateVideo, deleteVideo, addCategory }}>
      {children}
    </VideoContext.Provider>
  )
}
