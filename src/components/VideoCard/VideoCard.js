import React from "react"
import styles from "./VideoCard.module.css"
import { useVideoContext } from "../../contexts/VideoContext"

const VideoCard = ({ video }) => {
  const { deleteVideo } = useVideoContext()

  return (
    <div className={styles.card}>
      <img src={video.imageUrl || "/placeholder.svg"} alt={video.title} className={styles.thumbnail} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div className={styles.actions}>
        <button onClick={() => deleteVideo(video.id)} className={styles.deleteButton}>
          Eliminar
        </button>
        <button className={styles.editButton}>Editar</button>
      </div>
    </div>
  )
}
