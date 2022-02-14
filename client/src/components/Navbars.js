import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import{ getCurrent, logout} from '../redux/actions/Authaction'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@mui/material';

export default function Navbar() {
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch= useDispatch()
  const user= useSelector(state=>state.AuthReducer.user)

  React.useEffect(()=>{
dispatch(getCurrent())
  },[])
const token = localStorage.getItem("token");

const Navigate = useNavigate();

  return (
   
  
     <div>
       
     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      
      {token && user && user.role === "user" ?
      <Tabs value={value} onChange={handleChange} centered> 
    <Search>
      <SearchIconWrapper>
      <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>

    <Link to ='/listproduct'><Tab label="Home" /></Link>
    <Tab onClick={()=> dispatch(logout())} label="logout" />
    <div style={{color:'bleu' }}>  <Tab ><ShoppingCartIcon /> </Tab></div>
    </Tabs>
    :token && user && user.role === "admin" ?
    <Tabs value={value} onChange={handleChange} centered>
    <Link to ='/admin'><Tab label="Dashboard"/> </Link>
    <Tab onClick={()=> dispatch(logout())} label="logout" /> 
    </Tabs>
   :
   <Tabs value={value} onChange={handleChange} centered>
       <Search>
     <SearchIconWrapper>
     <SearchIcon />
     </SearchIconWrapper>
     <StyledInputBase
       placeholder="Search…"
       inputProps={{ 'aria-label': 'search' }}
     />
   </Search> 
    <Link to ='/'><Tab label="Home" /></Link>
    <Link to='/signIn'><Tab label="signin" /></Link>
    <Link to='/signUp'><Tab  label="signup" /></Link>
    <Tab><ShoppingCartIcon/> </Tab>
    
   </Tabs>
}
   </Box>
    </div>

    )}
   

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


