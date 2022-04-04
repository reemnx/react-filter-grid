import React from 'react'

interface Props {
    children: any,
    handleClose: () => void
}

export const ChildrenModal = (props: Props) => {
    const { children, handleClose } = props
    return (
        <div onClick={handleClose} className='modal-wrapper flex align-center justify-center'>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
}
