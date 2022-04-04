import React, { useState, useEffect } from 'react'

interface Props {
    placeHolder: string,
    ctaContent: string,
    handleFilter: (event: string) => void
}

export const Filter = (props: Props) => {
    const { placeHolder, ctaContent, handleFilter } = props
    const [filter, setFilter] = useState<string>('')

    useEffect(() => {
        // Filter the list
        handleFilter(filter)
    }, [filter])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setFilter(value)
    }
    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        // Do something...
    }
    return (
        <div className='filter-wrapper flex align-center'>
            <input type="text" placeholder={placeHolder} value={filter} onChange={(e) => handleChange(e)} />
            <button onClick={handleClick}>{ctaContent}</button>
        </div>
    )
}
