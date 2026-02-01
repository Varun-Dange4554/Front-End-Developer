export const navBar =()=>{
   return  `
     <p class="offer">Get EXTRA 15% OFF On Orders Above ₹1299* Code: YES15 | Get EXTRA 20% OFF On Orders Above ₹1999*
        Code: YES20</p>
    <header>
        <div class="search">
            <div>
                 <img src="./utils/search-svgrepo-com.svg" alt="search">
                <span>search</span>
                           </div>
        </div>
        <div class="logo">
            <div>
                <img src="./utils/Asset_3_4x_002_135x.avif" alt="brand_logo">
            </div>
        </div>
        <div class="list_icon">
            <span>
                <img src="./utils/profile.svg" alt="">
            </span>
            <span>
                <label>whishlist</label>
                <img src="./utils/wishlist.svg" alt="">
            </span>
            <span>
                <label>cart</label>
                <img src="./utils/cart-check.svg" alt="">
            </span>
            <span>
                <label>stores</label>
                <img src="./utils/location-pin.svg" alt="">
            </span>
            <span>
                <label>Track order</label>
                <img src="./utils/truck-speed.svg" alt="">
            </span>
        </div>
    </header>

    `
}



export  const navStyle = () =>{
    return `
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Jost, sans-serif;
}

header {
  padding: 0 20px;
  border-bottom: 1px solid gray;
  height: 86px;
}

.search,
.list_icon,
.logo {
  width: 100%;
}

.list_icon > span > img,
.search > div > img {
  width: 50px;
  width: 24px;
  height: fit-content;

}

.list_icon > span {
  display: block;
  gap: 5px;
}

.logo > div > img {
  width: 135px;
  height: fit-content;
  background: #000;
}
.offer {
  background: #b61d0f;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  font-size: 12px;
}

header,
.list_icon,
.list_icon > span,
.logo > div {
  display: flex;
  align-items: center;
}

.list_icon {
  gap: 10px;
  display: flex;
  justify-content: end;
}

.logo > div {
  justify-content: center;
}
.search > div {
align-items: center;
display: flex;

}

    `
}


export const Footer = () =>{
    return `
     <div class="container">
            <div class="container1">
                <div class="menu-block1">
                    <h6 class="section-footer-title">What's In Store</h6>
                    <ul class="fotter-memu-block">
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#"> Women</a></li>
                        <li><a href="#"> Kids</a></li>
                        <li><a href="#"> Track Order</a></li>
                    </ul>
                </div>
                
                <div class="menu-block2">
                    <h6 class="section-footer-title">Company Info & Policies</h6>
                    <ul class="fotter-memu-block">
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Sneaker Care</a></li>
                        <li><a href="#"> Corporate</a></li>
                        <li><a href="#"> Terms & Conditions</a></li>
                        <li><a href="#">  Privacy & Cookies Policy</a></li>
                        <li><a href="#"> FAQ's</a></li>
                        <li><a href="#">  Return & Claim Policy</a></li>
                        <li><a href="#"> Contact Us</a></li>
                        <li><a href="#"> Return/Exchange </a></li>
                        <li><a href="#">  Return Policy</a></li>
                        <li><a href="#">   Shipping Policy</a></li>
                    </ul>
                </div>

                <div class="menu-block3">
                    <h6 class="section-footer-title">Get In Touch</h6>
                        <p> <strong>Online Order</strong>
                        <br> 
                    </p>
                    <p>
                    Inquiry/Complaint:
                    <br>
                    <strong>
                        9667706012
                        <br>
                    </strong>
                    <em>
                        <strong>10.00AM to 7:00PM </strong>
                    </em>
                    </p>
                    <p>
                        Any Other queries:
                        <br>
                        <strong>
                            9667706012
                            <br>
                        </strong>
                        <em>
                            <strong>10.00AM to 7:00PM </strong>
                        </em>
                        <br>
                    </p>
                    <p>Email:
                        <a href="#"> 
                            <strong>customercare@campusshoes.com</strong>
                        </a>
                    </p>
                    <p>
                        For Bulk/B2B/Institutional/School Orders and Queries please <br> share your details -
                        <strong></strong>
                        <a href="#"> <strong>INSTITUTIONAL </strong></a>
                         or write to us at <br>
                         <strong></strong>
                         <a href="#"> <strong>instt@campusshoes.com</strong></a>
                         <strong></strong>
                        
                         
                    </p>
                     <p></p>
                     <p></p>
                
                </div>
                <div class="menu-block4">
                    <h6 class="section-footer-title">Newsletter</h6>
                    <div class="section-footer-text">
                        <p>Sign up for exclusive offers, original stories, <br>upcoming events and more.</p>
                    </div>
                    <div class="signup-form">
                        <form action=""> <p>
                            <input type="text" placeholder="Enter email" class="signup-form-email" ></p>
                            <button class="signup-form__button">Sign up</button>
                        </form>
                    </div>
                    <div class="newsletter-block__social">
                        <div class="social-links">
                            <ul class="social-links__list">
                                <li>
                                    <a href="#" >
                                        <img src="" alt="">
                                        <title>Facbook</title>

                                    </a>
                                </li>
                                <li><a href="#">
                                    <img src="" alt="">
                                    <title>Youtube</title>
                                </a>
                            </li>
                                <li><a href="#">
                                 <img src="" alt="">
                                 <title>Instagram</title>
                                </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="" alt="">
                                        
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
             </div>
              


        </div>

        <div class="container">
            <div class="categories-interlin-section">
                <h2 class="Popular">Popular Searches</h2>
                <div class="men-links" style="display:block;">
                    <a href="" > Men's footwear |</a>
                    <a href="#">Men's Running Shoes |</a>
                    <a href="#">Men's Walking Shoes |</a>
                    <a href="#">Men's Casual Shoes |</a>
                    <a href="#"> Men's Sports shoes |</a>
                    <a href="#">Men's Walking Shoes |</a>
                    <a href="#">Men's Casual Shoes |</a>
                    <a href="#">Men's Sports shoes |</a>
                    <a href="#">Men's Sneakers |</a>
                    <a href="#"> Men's Casual Sandals |</a>
                    <a href="#"> Men's Sports Sandals |</a>
                    <a href="#"> Men's Flip Flops & Slides |</a>
                    <a href="#">Men's Flip Flops |</a>
                    <a href="#">Men's Slides</a>
                </div>
                <div class="women-links" style="display:block;">
                    <a href="#">Women's Footwear |</a>
                    <a href="#">Women's Running Shoes |</a>
                    <a href="#">Women's Casual Shoes |</a>
                    <a href="#">Women's Sports Shoes |</a>
                    <a href="#">Sneakers |</a>
                    <a href="#">Women's Casual Sandal |</a>
                    <a href="#">Women's Sports Sandal |</a>
                    <a href="#">Women's Flip Flops & Slides |</a>
                    <a href="#">Women's Flip Flops |</a>
                    <a href="#">Women's Slides</a>
                </div>
                <div class="kids-links" style="display:block;">
                    <a href="#"> Kid's footwear  |</a>
                    <a href="#">Kid's Running Shoes |</a>
                    <a href="#">Kid's Walking Shoes |</a>
                    <a href="#">Kid's Casual Shoes |</a>
                    <a href="#">Kid's School Shoes |</a>
                    <a href="#">Kid's Sports Shoes |</a>
                    <a href="#">Kid's Sandals & Floaters |</a>
                    <a href="#">Kid's Casual Sandals |</a>
                    <a href="#">Kid's Sports Sandals |</a>
                    <a href="#">Kid's Flip Flops & Slides |</a>
                    <a href="#"> Kid's Flip Flops</a>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="last_row">
                <div class="section-footer__row__col">
                    <div class="copyright">
                        <span class="copy">© 2025 
                            <a href="#">Campus Shoes</a>
                        </span>
                    </div>
                </div>

            </div>
      </div>
`
}



export const footerStyle = () => {
    return `
    
.footer{
    height: 824.3px;
    background-color: #f4dfdb;  
}


.container{
  padding: 0px 40px;
  
}

.container1{
  padding: 60px 0px 80px;
 margin: opx -10px -50px;  
  display: flex;
  justify-content: space-between;

}

.menu-block1,.menu-block2,.menu-block3{
  margin:  0px 0px 40px;
  padding: 0px 20px;
}

.menu-block4{
  margin:  0px 0px 50px;
  padding: 0px 20px;

}

.section-footer-title{
  font-size: 16px;
  margin: 0px 0px 20px;
  color: #171717;
}

li a  {
  text-decoration: none;
  color: #676869;
}

li{
  font-size: 15px ;
  margin: 0px 0px 7.5px;
  list-style: none;


}

p{
  color: #676869;
  font-size: 15px;
  margin: 0px 0px 15px;
}

.signup-form-email{
  background-color: #FFFFFF;
padding: 12.8px 15px;
width: 310px;
}

.signup-form__button{
  background-color: #212B36;
  font-size: 13px;
  padding: 15.6px 25px;
  width: 108.35px;
  color: white;
}
.signup-form__button:hover{
  color: #212B36;
  background-color: white;;

}


a ,strong{
  text-decoration: none;
  color: #676869;
}



.men-links ,.women-links,.kids-links a{
  line-height: 1.6;
}


.Popular{
  color: #171717;
  font-size: 17px;
  margin: 0px 0px 10px;
}







.last_row{
  color: #676869;
  margin: 0px -10px;
  padding: 50px 0px ;
}

    `
}