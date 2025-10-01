import {React} from 'react';
import { Box, Typography } from "@mui/material";

const About =() =>{

    return(
        
            <Box sx={{padding:'60px'}}>
                <Typography>
                    This is a comprehensive <strong>project management web application</strong> built using <strong>React</strong> for the frontend and <strong>Django</strong> for the backend. The system is designed to help users create, update, and
                    manage multiple projects in an organized and efficient way. It brings together
                    modern design principles with powerful backend logic, ensuring both
                    usability and reliability.
                    <br /><br />
                    The application enables users to add new projects, update existing ones,
                    track their status, and set start and end dates to maintain clear timelines.
                    Comments and notes can be stored with each project, making collaboration
                    easier for teams and helping individuals remember key details.
                    Project statuses such as <em>Open</em>, <em>In Progress</em>, and
                    <em>Completed</em> make it simple to monitor progress at a glance.
                    <br /><br />
                    On the frontend, React provides a smooth and responsive user experience
                    with an intuitive interface. Material UI has been used to design clean and
                    modern components, ensuring a consistent look and feel throughout the
                    application. Features such as sorting, filtering, and responsive tables
                    make project data easy to view and manage. The sidebar navigation
                    ensures that users can quickly move between pages such as Home, Create,
                    and About.
                    <br /><br />
                    On the backend, Django provides robust data handling and secure APIs.
                    All project data is stored and managed efficiently, with REST API endpoints
                    connecting the frontend to the backend. This separation of concerns ensures
                    scalability, making the system capable of handling more complex project
                    management features in the future.
                    <br /><br />
                    The purpose of this project is to offer a <strong>lightweight yet powerful
                    project tracking tool</strong> suitable for students, professionals, and small
                    teams. By combining the simplicity of React with the reliability of Django,
                    the application ensures that users can focus on their work while the system
                    takes care of organization, timelines, and data management.
                </Typography>
            </Box>


    
    )
}

export default About