const heroLogo = new URL('../UTILS/shoes.svg', import.meta.url).href;

const footer_svg_logo = new URL(
  '../UTILS/shoes.svg',
  import.meta.url,
).href


// Navbar
export const Navbar = () => {
  return `
    <section class="logo">
      <img src="${heroLogo}" alt="logo" />
    </section>

    <section class="page_route">
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>help</li>
      </ul>
    </section>

    <section class="btn_sign_login">
      <button name="login" class="login" >login</button>
      <button name="signup"class="signup">signup</button>
    </section>
  `;
};


// Footer
export const Footer = () => {
  return `
    <section class="footer">

      <section class="footer_logos">
        <img src="${footer_svg_logo}" alt="footer_logo" />
      </section>


      <h1>hello</h1>
      <section class="footer_text">
        lorem ipsum dolor sit amet consectetur,
        adipisicing elit, saepe illo adipisicing elit
      </section>

      <section class="social_logo">
        <img src="${facebook_logo}" alt="facebook" />
        <img src="${github_logo}" alt="github" />
        <img src="${google_logo}" alt="google" />
        <img src="${youtube_logo}" alt="youtube" />
        <img src="${linkdin_logo}" alt="linkedin" />
      </section>

    </section>
  `;
};