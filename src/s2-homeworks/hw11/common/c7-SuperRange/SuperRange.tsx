import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: 'green',
                '& .MuiSlider-thumb': {
                    borderRadius: '50%',
                    border: '2px solid green',
                    backgroundColor: 'white',
                    '&:hover': {
                        boxShadow: '0px 0px 5px green',
                    }
                },
                '& .MuiSlider-track': {
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: 'gray',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
