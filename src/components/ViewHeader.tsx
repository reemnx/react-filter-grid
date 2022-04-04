import React from 'react'

interface Props {
    content: string
}

export const ViewHeader = (props: Props) => {
    const { content } = props
    return (
        <h3 className='view-header'>{content}</h3>
    )
}
