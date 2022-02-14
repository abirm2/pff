import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { deleteProduct, toogletrue, updateProduct } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/panieraction";
import { Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'
function ProductCard({product}) {
 
  const [name, setName] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [pic, setPic] = React.useState("")
  const [qte, setQte] = React.useState("")
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthReducer.user);
  const token = localStorage.getItem("token");
  const edit = useSelector(state => state.ProductReducer.edit)
  const cart = useSelector(state => state.ProductReducer.cart)
  const find =cart && cart.find(el=>el.id==product._id)
    React.useEffect(() => {
     if(edit) {setName(product.name); setPic(product.pic); setQte(product.qte);setPrice(product.price)}
       else {
       setName('');
       setPic('');
       setPrice("0")
       setQte(0)
     }
    }, [])
  return (
    <div>
      <Card
        sx={{ minWidth: 500 }}
        style={{ height: "500px", textAlign: "center",padding :"50px"}}
      >
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <img src={product.pic} alt="#"></img>
          </Typography>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product.price}
          </Typography>
  
        <CardActions>
          {(token && user && user.role === "admin") ? (
             <> <Button variant="contained"  size="small" onClick={(e) =>{ 
                 e.preventDefault();
                dispatch(toogletrue());
                 dispatch(updateProduct(product._id,{ name, pic, price,qte }))
                 }}>
                {" "}
                Updateproduct
              </Button>
              <Button variant="contained" size="small" onClick={() => dispatch(deleteProduct(product._id))}>
                Delete product
              </Button>
              </>
          ) : (
        <>
     <Button variant="contained" onClick={()=>{
          find ? alert ('product exist'): (dispatch(addToCart(product))&& navigate('/shoppingCard'))
        }}> buy now</Button>

          </>
        )};
</CardActions>
    </Card>
 </div>
  )} 
export default ProductCard;
