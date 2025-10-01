import {React, useEffect, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import Date from './form/Date'
import Text from './form/Text'
import Multiline from './form/Multiline'
import Selectstart from './form/Selectstart'
import {useForm} from 'react-hook-form'
import AxiosInstance from './axios'
import Dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import MultiSelect from './form/MultiSelect'


const Create =() => {


    const[projectmanager,setprojectmanager]=useState()
    const[members,setMembers]=useState()
    const[loading,setloading]=useState(true)

    const select_options =[
        {'id':'','name':'None'},
        {'id':'Open','name':'Open'},
        {'id':'In progress','name':'In progress'},
        {'id':'Completed','name':'Completed'},
    ]

    

    const GetData=() =>{
        AxiosInstance.get('ProjectManager/').then((res)=>{
            setprojectmanager(res.data)
            console.log(res.data)
        });

        AxiosInstance.get('members/').then((res)=>{
            setMembers(res.data)
            console.log(res.data)
            setloading(false)
        });

    }

    useEffect(()=>{
        
        GetData();
    },[])

    const navigate=useNavigate();
    const defaultValues={
        name :'',
        comment :'',
        status :'',
    }
    const schema = yup
    .object({
        name: yup.string().required('Name is required'),
        ProjectManager: yup.string().required('Project Manager is required'),
        status: yup.string().required('Status is required'),
        members:yup.array().min(1,'Please select atleast 1 option'),
        comment: yup.string(),
        start_date: yup.date().required('Start Date is required'),
        end_date: yup.date().required('End Date is required').min(yup.ref('start_date'),'End Date cannot be before the Start Date'),
        
    })



    const {handleSubmit, control} = useForm({defaultValues:defaultValues,resolver:yupResolver(schema)})
    const submission = (data) =>
        {
            
            const StartDate = Dayjs(data.start_date).format("YYYY-MM-DD")
            const EndDate = Dayjs(data.end_date).format("YYYY-MM-DD")

            AxiosInstance.post('project/',{
                name:data.name,
                ProjectManager:data.ProjectManager,
                members:data.members,
                status:data.status,
                comment:data.comment,
                start_date: StartDate,
                end_date: EndDate,

            })
            .then(()=>{

                navigate('/')
            })
        }

    return(

        <div>
        { loading ? <p>Loading Data...</p> :

            <form onSubmit={handleSubmit(submission)}>

            <Box sx={{backgroundColor: 'black',display: 'flex', width:'100%', marginBottom:'10px'}}>

                <Typography sx={{ marginLeft:'20px', color: 'white' }}>Create your reports</Typography>
            </Box>

            <Box sx={{display:'flex', width:'100%', boxShadow:3,padding:4,flexDirection:'column'}}>
                <Box sx={{display:'flex', justifyContent:'space-evenly', marginBottom:"40px"}}>
                    <Text
                        label="Name"
                        name="name"
                        control={control}
                        placeholder="Enter your project name"
                        width={"30%"}
                    />

                    <Date
                        label="Start date"
                        name="start_date"
                        control={control}
                        width={"30%"}
                    />

                    <Date
                        label="End date"
                        name="end_date"
                        control={control}
                        width={"30%"}
                    />

                </Box>
                <Box sx={{display:'flex', justifyContent:'space-around'}}>

                    <Multiline
                        label="Comment"
                        name="comment"
                        control={control}
                        placeholder="Enter your comments"
                        width={"30%"}
                    />

                    <Selectstart
                        label="Status"
                        name="status"
                        control={control}
                        width={"30%"}
                        options={select_options}
                    />
                    

                        <Selectstart
                        label="Project Manager"
                        name="ProjectManager"
                        control={control}
                        width={"30%"}
                        options={projectmanager}
                        />

                </Box>

                <Box sx={{display:'flex', justifyContent:'space-around', marginTop:'20px'}}>

                        <MultiSelect
                            label="Members"
                            name="members"
                            control={control}
                            width={"30%"}
                            options={members}
                        />

                </Box>


                <Box sx={{display:'flex', justifyContent:'start', marginTop:'30px',marginLeft:'15px'}}>

                        <Button variant='contained'type='submit'sx={{width:"20%"}}>
                            Submit
                        </Button>
                </Box>

            </Box>

            </form> }

        
        </div>
        )
    }
export default Create