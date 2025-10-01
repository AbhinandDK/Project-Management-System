import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function Multiline(props) {
    const {label,placeholder,name,control,width} =props
    return (

        <Controller

        name={name}
        control={control}
        render={({

            field:{onChange,value},
            fieldState:{error},
            formState,

        }) => (

            <TextField
                id="standard-multiline-static"
                label={label}
                onChange={onChange}
                value={value}
                multiline
                rows={1}
                // defaultValue="Default Value"
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