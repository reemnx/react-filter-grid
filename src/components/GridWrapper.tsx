import React, { useEffect, useState } from 'react'

interface Props {
    children: any,
    minMaxItemWidth: string
}

export const GridWrapper = (props: Props) => {
    const { children, minMaxItemWidth } = props
    const [colsTemplate, setTemplate] = useState<string>('')
    useEffect(() => {
        setCols()
    }, [])

    const setCols = () => {
        // Responsive grid with min-max grid item size
        let template = `repeat(auto-fit, minmax(${minMaxItemWidth}, ${minMaxItemWidth}))`
        setTemplate(template)
    }

    return (
        <div className='grid-wrapper' style={{ 'gridTemplateColumns': colsTemplate }}>
            {children}
        </div>
    )
}
