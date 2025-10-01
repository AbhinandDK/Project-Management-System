import {react,useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import AxiosInstance from './axios';
import {useNavigate,useParams} from 'react-router-dom';


const Delete =() =>{

    const MyParam=useParams()
    const MyId = MyParam.id

    const[myData, setmyData] = useState()
    const[loading,setloading] = useState(true)

    const GetData = () => {
        AxiosInstance.get(`project/${MyId}`).then((res) =>{
            setmyData(res.data)
            console.log(res.data)
            setloading(false)

        })
    }

    useEffect(()=>{
        GetData();
    },[])

    const navigate=useNavigate()
    
    const submission=(data)=>
    {

        AxiosInstance.delete(`project/${MyId}/`)
        .then(()=>{
            navigate('/')
        })
    }

    return(

        <div>
        {loading ? <p>loading data...</p> :
        <div>

            <Box sx={{backgroundColor: 'black',display: 'flex', width:'100%', marginBottom:'10px'}}>

                <Typography sx={{ marginLeft:'20px', color: 'white' }}>
                    Delete project: {myData.name}
                </Typography>
            </Box>

            <Box sx={{display:'flex', width:'100%', boxShadow:3,padding:4,flexDirection:'column'}}>
                <Box sx={{display:'flex', justifyContent:'start', marginBottom:"40px"}}>
                        Are you sure you want to delete : {myData.name}
                </Box>
                
                <Box sx={{width:"30%"}}>
                    <Button variant='contained' onClick={submission} sx={{width:"100%"}}>
                        Delete
                    </Button>
                </Box>

            </Box>


        </div>
        }
        </div>
        )
}

export default Delete