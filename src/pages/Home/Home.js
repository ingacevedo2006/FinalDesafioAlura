import React from "react"
import styles from "./Home.module.css"
import { useVideoContext } from "../../contexts/VideoContext"
import VideoCard from "../../components/VideoCard/VideoCard"

const Home = () => {
  const { videos, categories } = useVideoContext()

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <h1>Bienvenido a AluraFlix</h1>
      </div>
      {categories.map((category) => (
        <div key={category} className={styles.category}>
          <h2>{category}</h2>
          <div className={styles.videoList}>
            {videos
              .filter((video) => video.category === category)
              .map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
