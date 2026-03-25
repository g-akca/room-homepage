function ImageContainer({ src, alt="", className }) {
  return (
    <img src={src} alt={alt} className={`w-full object-cover object-center ${className}`} />
  )
}

export default ImageContainer;