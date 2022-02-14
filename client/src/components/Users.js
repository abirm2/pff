import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'

function Listusers({user}) {
 
   return (
    <div style={{ width:'25%', height:'25%' }}>
    <Card sx={{ minWidth: 275 }}>
         <CardContent>
           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.lastname}
           </Typography>
           <Typography variant="h5" component="div">
           {user.name} 
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.role}
           </Typography>
         </CardContent>
       </Card>
     
           </div>
   ) 
}
export default Listusers