import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        < div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', margin:'100px'}}>

<div class="col-12 col-sm-6 col-md-3">
            <h6>Follow us</h6>
            <ul class="list-unstyled">
              <li><a href="#"> <FacebookIcon/>Facebook</a></li>
              <li><a href="#"> <TwitterIcon/>Twitter</a></li>
              <li><a href="#"><InstagramIcon/>Instagram</a></li>
              <li><a href="#"><YouTubeIcon/>YouTube</a></li>
            </ul>
          </div>

          <div class="row">
          <div class="col-12 col-sm-6 col-md-9">
            <ul class="list-inline">
              <li class="list-inline-item">&copy; 2022 Web Company.</li>
              <li class="list-inline-item">All rights reserved.</li>
              <li class="list-inline-item">
                <a href="#">Terms of use and privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
    
            <div class="dropdown dropup p-0">
              <button
                type="button"
                class="btn btn-secondary btn-sm dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Visit other sites:
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="#" class="dropdown-item">www.otherwebsite.com</a>
                <a href="#" class="dropdown-item">www.newwebsite.com</a>
                <a href="#" class="dropdown-item">www.oldwebsite.com</a>
              </div>
            </div>
          
    
</div>
    )
    
}
export default Footer