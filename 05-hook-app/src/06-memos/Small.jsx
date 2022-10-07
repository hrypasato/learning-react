import { memo } from "react"

export const Small = memo(({ value }) => {
    console.log('Dibujando small')
    return (
        <small>{ value }</small>
    )
})
