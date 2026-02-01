export const navBar = () => {
  return `
<header class="navbar">
  <div class="logo">
    <img src="Utils/image.png" alt="logo" />
  </div>

  <nav class="nav-links">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Projects</li>
      <li>Clients</li>
      <li class="contact-btn">Contact Us</li>
    </ul>
  </nav>
</header>
`
};




export const navStyle = () => {
  return `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family: 'Open Sans', Arial, sans-serif;
    padding-top: 90px;
}

.navbar{
  width:100%;
  height:90px;
  position:fixed;
  top:0;
  left:0;
  z-index:100;
  background:#F5F5F5;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 80px;
  box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.logo img{
  height:60px;
}

.nav-links ul{
  display:flex;
  list-style:none;
  gap:20px;
}

.nav-links li {
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 15px;
  transition: 0.3s;
  position: relative;
}

.nav-links li::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8b00ff
  );
  background-size: 200% auto;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

/* hover effect */
.nav-links li:hover::after {
  transform: scaleX(1);
  animation: gradient-89 3s linear infinite;
}

/* gradient animation */
@keyframes gradient-89 {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
 



`
};





export const Footer = () => {
  return `
    <div class="container">
        <div class="container1">
          <div class="menu-block1">
            <h6 class="section-footer-title">Sark Corporation Pvt. Ltd.</h6>
            <div class="fotter-memu-block">
              <p>
                Office No 268, <br />SSIII, FF, Sector 6 Kopar Khairane Rd,<br />
                Sector 6, Kopar Khairane, Navi Mumbai,<br />
                Maharashtra 400709
              </p>
            </div>
            <div class="row">
              <div class="col-2">
                <p>
                  <strong>Phone:</strong>
                </p>
            
              <div class="col-10">
                <p>8600887710</p>
              </div>
                </div>
              <div class="email">
                <p>
                  <strong>Email:</strong>
                </p>
                <div class="email">
                  <p>sunil@sarkcorporation.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="menu-block2">
            <ul>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="services.html">Services</a>
              </li>
            </ul>
          </div>

          <div class="menu-block3">
            <ul>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="clients.html">Clients</a>
              </li>
              <li>
                <i class="fa-solid fa-greater-than"> </i>
                <a href="contact.html">Contacts Us</a>
              </li>
            </ul>
          </div>
          <div class="menu-block4">
            <div class="social-links">
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-facebook"></i> </a>
              <a href=""><i class="fa-brands fa-linkedin"></i> </a>
            </div>
          </div>
        </div>
      </div>

      <div class="last-container">
        <div class="last_row">
          <div class="section-footer__row__col">
            <div class="copyright">
              <span class="copy">
                Copyright © 2025
                <a href="#">Sark Corporation - All Rights Reserved.</a>
              </span>
            </div>
          </div>
        </div>
      </div>

  `
}



export const footerStyle = () => {
  return `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

/* ================= FOOTER ================= */
.footer{
  width:100%;
  background:#F5F5F5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

/* main container */
.container{
  padding: 40px 60px;
}

/* footer columns wrapper */
.container1{
  display:flex;
  justify-content:space-between;
  gap:40px;
  flex-wrap:wrap;
}

/* footer blocks */
.menu-block1,
.menu-block2,
.menu-block3,
.menu-block4{
  flex:1;
  min-width:220px;
}

/* TITLES */
.section-footer-title{
  font-size:16px;
  font-weight:600;
  margin-bottom:20px;
  color:#171717;
}

/* TEXT */
p{
  color:#676869;
  font-size:14px;
  line-height:1.7;
  margin-bottom:12px;
}

strong{
  color:#171717;
  font-weight:600;
}

/* PHONE / EMAIL */
.row{
  margin-top:15px;
}

.col-2,
.email{
  display:flex;
  gap:8px;
}

/* LINKS */
.menu-block2 ul,
.menu-block3 ul{
  list-style:none;
}

.menu-block2 li,
.menu-block3 li{
  margin-bottom:12px;
  display:flex;
  align-items:center;
  gap:8px;
}

.menu-block2 a,
.menu-block3 a{
  text-decoration:none;
  color:#676869;
  font-size:14px;
  transition:color 0.3s ease;
}

.menu-block2 a:hover,
.menu-block3 a:hover{
  color:#171717;
}

.menu-block2 i,
.menu-block3 i{
  font-size:10px;
  color:#676869;
}

/* SOCIAL ICONS */
.social-links{
  display:flex;
  gap:17px;
}

.social-links a{
  color:#676869;
  font-size:30px;
  transition:color 0.3s ease;
}

.social-links a:hover{
  color:#171717;
}

/* BOTTOM BAR */
.last-container{
  padding:0 40px;
}

.last_row{
  padding:20px 0;
  border-top:1px solid #ddd;
}

.copy{
  font-size:13px;
  color:#676869;
}

.copy a{
  color:#676869;
  text-decoration:none;
}

.copy a:hover{
  color:#171717;
}
`;
};
