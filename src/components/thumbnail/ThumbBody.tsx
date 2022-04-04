import React from 'react'

interface Props {
    title: string,
    albumId: number
}

export const ThumbBody = (props: Props) => {
    const { title, albumId } = props
    return (
        <div className='thumbnail-body flex column align-center justify-center'>
            <h3>{title}</h3>
            <p>id: {albumId}</p>
        </div>
    )
}
