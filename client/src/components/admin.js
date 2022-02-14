import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link, Navigate} from 'react-router-dom'
import { getusers } from '../redux/actions/Authaction';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, updateProduct } from '../redux/actions/productAction';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { addproduct } from '../redux/actions/productAction';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddIcon from '@mui/icons-material/Add';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  
function Admin() {
 const dispatch =useDispatch()
 const product = useSelector(state => state.ProductReducer.product)
 const [name, setName] = React.useState("")
 const [price, setPrice] = React.useState("")
 const [pic, setPic] = React.useState("")
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (

        <div>
          
 <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
          <ListItem disablePadding>
       <AddBusinessIcon></AddBusinessIcon>
            <Link to='/listproduct'>
              <ListItemButton onClick={()=> dispatch(getProducts())}>
              <ListItemText primary="ALL_PRODUCT" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <AccessibilityIcon></AccessibilityIcon>
          <Link to='/users'> <ListItemButton onClick={()=> dispatch(getusers())}>
              <ListItemText primary="ALL_USERS" />
            </ListItemButton>
            </Link>
          </ListItem>
     
 
   <Button onClick={handleOpen}>Add products
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
  <Box sx={style}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
      new product 
    </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     <TextField label='Name' onChange={(e)=>setName(e.target.value)}
          value={name}></TextField>
      <TextField label='price' onChange={(e)=>setPrice(e.target.value)}
          value={price}></TextField>
     <TextField label='picture' onChange={(e)=>setPic(e.target.value)}
          value={pic}></TextField>
               
      
          </Typography>
  
         <Button onClick={()=>dispatch(addproduct({name,price,pic},))}>
        ADD PRODUCT</Button> 
  </Box>
</Modal>
</Button>
</nav>
</Box>
   </div>
        
    )
    
}
export default Admin 
