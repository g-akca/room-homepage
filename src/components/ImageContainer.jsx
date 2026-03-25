function ImageContainer({ src, className }) {
  return (
    <img src={src} className={`w-full ${className}`} />
  )
}

export default ImageContainer;