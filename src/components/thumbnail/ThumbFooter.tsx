import React from 'react'

interface Props {
    url: string
}

export const ThumbFooter = (props: Props) => {
    const { url } = props
    return (
        <div className='thumbnail-footer'>
            {url}
        </div>
    )
}
