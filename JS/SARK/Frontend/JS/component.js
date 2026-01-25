export const navBar = () => {
  return `
    <header class="navbar">
      <div class="logo">
        <img src="./Utils/image.png" alt="logo" />
      </div>

      <nav class="nav-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
        <a href="#">Testimonials</a>
        <a href="#">Clients</a>
        <a href="#">Case Studies</a>
        <a href="#" class="contact-btn">Contact Us</a>
      </nav>
    </header>

    <div class="slider_hero">
      <div class="slider"><img src="./Utils/head-slide1.jpg"></div>
      <div class="slider"><img src="./Utils/head-slide4.jpg"></div>
      <div class="slider"><img src="./Utils/head-slide3.jpg"></div>
      <div class="slider"><img src="./Utils/head-slide4.jpg"></div>
      <div class="slider"><img src="./Utils/head-slide5.jpg"></div>
      <div class="slider"><img src="./Utils/head-slide6.jpg"></div>
      <div class="slider"><img src="./Utils/turnkey-projects-1200x343.jpg"></div>

      <button class="arrow prev">❮</button>
      <button class="arrow next">❯</button>
    </div>
  `;
};
