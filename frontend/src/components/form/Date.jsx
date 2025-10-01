import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';

export default function Date(props) {
    const {label,name,control,width}=props
    return (
        <Controller
                name={name}
                control={control}
                render ={({
        
                    field:{onChange,value},
                    fieldState:{error},
                    formState,
                    
                }) => (
        
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
        
                        <DatePicker
                            label={label}
                            sx={{width:{width}}}
                            onChange={onChange}
                            value={value}
                            slotProps={{
                                textField:{
                                    error: !!error,
                                    helperText: error?.message,
                                }
                            }}
                        />
    
                    </LocalizationProvider>
        
                )
                }
                />
    
    );
}
