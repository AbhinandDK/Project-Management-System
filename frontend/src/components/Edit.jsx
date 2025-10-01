import {React,useEffect,useState} from 'react'
import {Box, Button, Typography} from '@mui/material';
import Date from './form/Date';
import Text from './form/Text';
import Multiline from './form/Multiline';
import Selectstart from './form/Selectstart';
import {useForm} from 'react-hook-form';
import AxiosInstance from './axios';
import Dayjs from 'dayjs';
import {useNavigate,useParams} from 'react-router-dom';
import MultiSelect from './form/MultiSelect';


const Edit =() =>{

    const MyParam=useParams()
    const MyId = MyParam.id

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
        })

        AxiosInstance.get('members/').then((res)=>{
            setMembers(res.data)
            console.log(res.data)
            set
        })

        AxiosInstance.get(`project/${MyId}`).then((res)=>{
            
            console.log(res.data)
            setValue('name',res.data.name)
            setValue('status',res.data.status)
            setValue('ProjectManager',res.data.ProjectManager)
            setValue('members',res.data.members)
            setValue('comment',res.data.comment)
            setValue('start_date',Dayjs(res.data.start_date))
            setValue('end_date',Dayjs(res.data.end_date))
            setloading(false)
        })

    }

    useEffect(()=>{
        GetData();
    },[])

    const navigate=useNavigate()
    const defaultValues={
        name :'',
        comment :'',
        status :'',
    }
    const {handleSubmit,setValue, control} = useForm({defaultValues:defaultValues})
        const submission=(data)=>
        {

            const StartDate = Dayjs(data.start_date?.$d).format("YYYY-MM-DD");
            const EndDate = Dayjs(data.end_date?.$d).format("YYYY-MM-DD");

            AxiosInstance.put(`project/${MyId}/`,{
                name:data.name,
                ProjectManager: data.ProjectManager,
                members: data.members,
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
                <Box sx={{display:'flex', justifyContent:'space-evenly'}}>

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

export default Edit