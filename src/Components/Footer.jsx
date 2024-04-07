
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import '../Styles/Footer.css';
import me1 from "../Images/me1.png";
import logo from "../Images/logo1.png"

function Footer(){
    return(
        <div class="footer  container-fliud text-white">
		<img class="imgloft position-absolute" src={me1} />
		<div class="row justify-content-md-center">
		</div>
		<div class="row" >
    	<div class="col pb-0 pe-5 pt-5 ps-5" style={{height:"fit-content"}}>
    		<img class="img-fluid h-50 w-50" src={logo} />
    		<div class="font-weight-bold ps-4 pe-5">
    			AnimeSite Chan Is Good For Health Doctors Always told you omg wtf but no their is onlyu come oinside see for yourslef and massively  level  up  you wtf skills  in the process
    		</div>
    		<div class="p-4 h2">
    			<i class="fab fa-facebook"></i>
    			<i class="fab fa-twitter"></i>
    			<i class="fab fa-instagram"></i>
    			<i class="fab fa-youtube"></i>
    			<i class="fas fa-envelope"></i>
    			<i class="fab fa-github"></i>
    			<i class="fab fa-discord"></i>
    			<i class="fab fa-twitch"></i>
    		</div>
    	</div>
    	<div class="col p-5" style={{height:"fit-content"}}>
    		<div class="row pt-3">
    			<div class="col-sm">
    				<div class="font-weight-bold mb-4">
    					LEARN
    				</div>
    				<ul class="list-unstyled text-opi">
    					<li class="mb-2"><a href=""> qfs </a></li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    					<li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    				</ul>
    			</div>
				  <div class="col-sm">
				  	<div class="font-weight-bold mb-4">
    					Spolaya
    				</div>
    				<ul class="list-unstyled text-opi">
    					<li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    					<li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    				</ul>
				  </div>
				  <div class="col-sm">
				  	<div class="font-weight-bold mb-4">
    					molaya
    				</div>
    				<ul class="list-unstyled text-opi">
    					<li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    					<li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li> <li class="mb-2">	qfs	</li>
    				</ul>
				  </div>
    		</div>
    	</div>
  	</div>
  	<div class="row pt-0 pe-5 ps-5 ">
  		<hr class="col me-4 ms-4 mt-0 text-opi" />
  	</div>
  	<div class="row justify-content-md-center pb-2"> 
  		<div class="col-md-auto  col-md-6 text-center text-opi ">
  			© Anime Abyss 2021 All Shits Reserved . Yes You Hear Me You Cute User Say BOnjour And Own Free Wow I Can Fly Like Banana Joe Hey This Is Joe
  		</div>
  	</div>
  	


	</div>
    );
}

export default Footer;