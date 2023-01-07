export type TitleProps = {
    text: string
}

export type ButtonProps = {
    children: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export type ImageProps = {
    src: string,
    alt: string
}


export type SearchBarProps = {
    name: string,
    placeholder: string,
    value: React.InputHTMLAttributes<HTMLInputElement>['value'],
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    type?:string
}