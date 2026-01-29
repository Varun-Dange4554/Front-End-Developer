export const navBar = () => {
  return `
    <header class="navbar">
      <div class="logo">
        <img src="../Utils/image.png" alt="logo" />
      </div>

      <nav class="nav-links">
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Testimonials</li>
          <li>Clients</li>
          <li>Case Studies</li>
          <li class="contact-btn">Contact Us</li>
        </ul>
      </nav>
    </header>

    <section class="slider_hero">
      <div class="slider "><img src="../Utils/head-slide1.jpg"></div>
      <div class="slider"><img src="../Utils/head-slide4.jpg"></div>
      <div class="slider"><img src="../Utils/head-slide3.jpg"></div>
      <div class="slider"><img src="../Utils/head-slide5.jpg"></div>
      <div class="slider"><img src="../Utils/head-slide6.jpg"></div>

      <button class="arrow prev">&#10094;</button>
      <button class="arrow next">&#10095;</button>
    </section>
  `;
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
}

.navbar{
  width:100%;
  height:90px;
  position:fixed;
  top:0;
  left:0;
  z-index:100;
  background:rgba(255,255,255,0.9);
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

.nav-links li{
  cursor:pointer;
  padding:8px 14px;
  border-radius:6px;
  font-size:15px;
  transition:0.3s;
}

.nav-links li:hover{
  background:#00c2cb;
  color:#fff;
}



.slider_hero{
  width:100%;
  height:100vh;
  position:relative;
  overflow:hidden;
  margin-top:90px;
}

.slider{
  position:absolute;
  inset:0;
  opacity:0;
  transition:opacity 1s ease-in-out;
}

.slider.active{
  opacity:1;
}

.slider img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:rgba(0,0,0,0.5);
  color:#fff;
  border:none;
  font-size:30px;
  padding:10px 18px;
  cursor:pointer;
  z-index:10;
}

.prev{ left:20px; }
.next{ right:20px; }

.arrow:hover{
  background:rgba(0,0,0,0.8);
}
`;
};
