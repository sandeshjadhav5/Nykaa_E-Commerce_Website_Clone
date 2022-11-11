import {Button, Input} from "@chakra-ui/react"
import {Icon} from "@chakra-ui/icons"
import { FaCartPlus,FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom"
import {NavLink} from "react-router-dom"
import {Navigate} from "react-router-dom"
import {useContext} from "react"
import { AuthContext } from "../Context/AuthContext/AuthContextProvider"
import AuthContextProvider from "../Context/AuthContext/AuthContextProvider"

function Navbar(){
    const {state,dispatch}=useContext(AuthContext)
    return (
        <>
        
        <nav> 
        <img width="100%" src="https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg"/>
            <div className="container">
                <ul className="menu-main">
                    <li>
                        <div className="logoDiv"><Link to="/"><img className="mainLogo" src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo-700x229.png"/></Link></div>
                        </li>
                    {/* FIRST STARTS HERE */}
                    <li>
                        <a href="">Categories</a>
                    
                    {/* menu-sub STARTS HERE */}
                    <div className="menu-sub">
                         {/* menu-col-1 STARTS HERE */}
                        <div className="menu-col-1">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    {/* menu-col-1 STARTS HERE */}
                    <div className="menu-col-1">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                    {/* menu-col-1 ENDS HERE */}
                    <div className="menu-col-1">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                     <div className="menu-col-1">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    </div>
                    {/* menu-sub ENDS HERE */}
                    </li>
                    {/* FIRST ONE ENDS HERE */}
                    {/* FIRST ONE ENDS HERE */}
                    {/* FIRST ONE ENDS HERE */}
                    {/* FIRST ONE ENDS HERE */}
                    <li><a href="">Brands</a>
                     {/* menu-sub STARTS HERE */}
                     <div className="menu-sub">
                         {/* menu-col-1 STARTS HERE */}
                        <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    {/* menu-col-1 STARTS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                    {/* menu-col-1 ENDS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                     <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    </div>
                    {/* menu-sub ENDS HERE */}
                    </li>
                    <li><a href="">Luxe</a>
                                {/* menu-sub STARTS HERE */}
                                <div className="menu-sub">
                         {/* menu-col-1 STARTS HERE */}
                        <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    {/* menu-col-1 STARTS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                    {/* menu-col-1 ENDS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                     <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    </div>
                    {/* menu-sub ENDS HERE */}
                    </li>
                     {/* THIRD ONE ENDS HERE */}
                    {/* THIRD ONE ENDS HERE */}
                    {/* THIRD ONE ENDS HERE */}
                    {/*THIRD ONE ENDS HERE */}
                    <li><a href="">Nykaa Fashion</a>
                       {/* menu-sub STARTS HERE */}
                       <div className="menu-sub">
                         {/* menu-col-1 STARTS HERE */}
                        <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    {/* menu-col-1 STARTS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                    {/* menu-col-1 ENDS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                     <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    </div>
                    {/* menu-sub ENDS HERE */}
                    </li>
                    <li><a href="">Beauty Advice</a>
                                {/* menu-sub STARTS HERE */}
                                <div className="menu-sub">
                         {/* menu-col-1 STARTS HERE */}
                        <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    {/* menu-col-1 STARTS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                    {/* menu-col-1 ENDS HERE */}
                    <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                     <div className="menu-col-2">
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                        <h4 className="menu-category">Face</h4>
                        <ul>
                        <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Blush</a></li>
                        </ul>
                    </div>
                     {/* menu-col-1 ENDS HERE */}
                    </div>
                    {/* menu-sub ENDS HERE */}
                    </li>
                    {/* <li><a href="">Beauty Advice</a></li> */}
                   <li>
                   <Input bg="#f4f4f4" ml="80px" w="200px" placeholder="Search On Nykaa"/>
                   </li>
                  { !state.isAuth && <li>
                        <Button  ml="20px" mt="-4px" w="80px" bg="#fc2779"  >
                            <NavLink  to="/login">Sign in</NavLink>
                        </Button>
                    </li>}
                  { state.isAuth &&  <li> <Icon w="40px" as={FaUserAlt}/>{state.userName}</li>}
                    <li><Icon w="40px" as={FaCartPlus}/></li>
                </ul>
                
            </div>
            
        </nav>
        </>
    )
}
export default Navbar
