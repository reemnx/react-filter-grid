import React from 'react'

interface Props {
  imgUrl: string
}

export const ThumbHeader = (props: Props) => {
  const { imgUrl } = props
  return (
    <div className='thumbnail-header flex align-center justify-center'>
      <img src={imgUrl} alt="Thumb Img" />
    </div>
  )
}
