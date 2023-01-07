import React from "react";
import { TitleProps } from '../types/components'


export const Title = (props: TitleProps) => {
    const {text} = props

    return (
        <h1 className="header_title">{text}</h1>
    )
}

export default Title