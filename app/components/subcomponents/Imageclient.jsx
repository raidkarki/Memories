'use client'

import Image from "next/image"
const imageLoader = ({ src, width }) => {
    return `https://img.icons8.com/emoji/${width}/${src} }`
  }
const Imageclient = ({w,h,s,a}) => {
  return (
    <Image
    loader={imageLoader}
    width={w}
    height={h}
    src={s}
    alt={a}

    
    >

    </Image>
  )
}

export default Imageclient