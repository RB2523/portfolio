
  import homeIconWhite from "../../assets/home_white.png";
  import homeIconBlack from "../../assets/home_black.png";

  import { useHistory , useLocation } from "react-router-dom";

  import "./GoHome.css";

     function GoHome(){

        const history = useHistory();
        const locaton = useLocation();

          const icon = locaton.pathname === "/" ;

          
         const navigateToHome = () => {
              history.push("/");
         }

         return (
             <button  className={`go-home-btn ${icon ? 'white-bkg' : 'gradient-bkg'}  `}  onClick={navigateToHome}>
                <img 
                src={ icon ? homeIconBlack : homeIconWhite} 
                alt="home-icon" 
                className='home-icon' />
             </button>
         );
     }

     export default GoHome ;