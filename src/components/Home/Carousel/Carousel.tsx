import { useEffect, useState } from "react";

interface Props {
  images: string[]
  autoplay?: boolean
}

const Carousel = (props: Props) => {


  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoplay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 4000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex =
        next ?
          condition ? selectedIndex + 1 : 0
          : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const prev = () => {
    selectNewImage(selectedIndex, props.images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images)
  }

  return (
    <>
      <img src={`${selectedImage}`} alt="carousel de estrenos" className={loaded ? "loaded" : ""} onLoad={() => { setLoaded(true) }} />
    </>
  )
}

export default Carousel;