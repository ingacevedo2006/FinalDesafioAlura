import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./NewVideo.module.css"
import { useVideoContext } from "../../contexts/VideoContext"

const NewVideo = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [description, setDescription] = useState("")

  const { addVideo, categories } = useVideoContext()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    addVideo({ id: Date.now(), title, category, imageUrl, videoUrl, description })
    history.push("/")
  }

  const handleClear = () => {
    setTitle("")
    setCategory("")
    setImageUrl("")
    setVideoUrl("")
    setDescription("")
  }

  return (
    <div className={styles.newVideo}>
      <h2>Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="url"
          placeholder="URL de la imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="URL del video"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className={styles.buttons}>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewVideo
