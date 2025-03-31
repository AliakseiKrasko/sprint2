import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '▼' // можно заменить на иконку
const upIcon = '▲'
const noneIcon = '⇅'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string): string => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort !== down && sort !== up) return down
    if (sort === down) return up
    return ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }


    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{cursor: 'pointer', marginLeft: '5px'}}
        >
    {icon}
</span>
    )
}

export default SuperSort
