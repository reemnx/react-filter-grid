import React, { useState, useEffect, useRef } from 'react'
import { PhotoInterface } from '../../interfaces/Photo'
import { ThumbHeader } from './ThumbHeader'
import { ThumbBody } from './ThumbBody'
import { ThumbFooter } from './ThumbFooter'

interface Props {
    data: PhotoInterface,
    onSelect?: (id: number) => void
}

export const Thumbnail = (props: Props) => {
    const { data, onSelect } = props
    const thumbWrapper = useRef(null) as React.RefObject<HTMLDivElement>
    const [isIntersecting, setIntersecting] = useState(false)
    useEffect(() => {
        initObserver()
    }, [])
    const handleIntersection = (entries: any) => {
        const [entry] = entries
        setIntersecting(entry.isIntersecting)
    }
    const initObserver = () => {
        const observer = new IntersectionObserver(handleIntersection, { root: null, rootMargin: "0px", threshold: 0.1 })
        if (thumbWrapper.current) observer.observe(thumbWrapper.current)
    }
    return (
        <div ref={thumbWrapper} onClick={() => { onSelect && onSelect(data.id) }} className='thumbnail-wrapper flex column'>
            {
                // If the grid item is not intersection, do not render the heavy content
                isIntersecting && <React.Fragment>
                    <ThumbHeader imgUrl={data.thumbnailUrl} />
                    <ThumbBody title={data.title} albumId={data.albumId} />
                    <ThumbFooter url={data.thumbnailUrl} />
                </React.Fragment>
            }
        </div>
    )
}
