import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form';

export default function Text(props) {
    const {label,placeholder, name, control,width} = props
    return (
        <Controller
        name={name}
        control={control}
        render ={({

            field:{onChange,value},
            fieldState:{error},
            formState,

            
        }) => (

            <TextField
                id="standard-basic"
                label={label}
                onChange={onChange}
                value={value}
                variant="standard"
                placeholder={placeholder}
                sx={{width:{width}}}
                error={!!error}
                helperText={error?.message}
            />


        )
    
    
        }
        />

    );
}