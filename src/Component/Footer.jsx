import React from 'react';
import Apple from '../Component/Assests/App Store BadgeApple.png';
import Google from '../Component/Assests/Google Play Badge.png';
import styles from '../Component/Assests/LandingPage.module.css';

function Footer() {
  return (
                <div class={`row ${styles.foot}`}>
                  <div class={`col-md-8 mt-5 text-start ${styles.footer}`}>
                    <ul>
                      {/* <li><img src="../assets/logo.png" alt=""/></li> */}
                    </ul>
                      <ul>
                        <li>Download Now</li>
                        <li>License</li>
                      </ul>
                      <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Career</li>
                        <li>Help</li>
                        <li>Privacy Policy</li>
                      </ul>
                      <ul>
                        <li>&copy; Designed by Bhankymyk</li>
                      </ul>
                      <p> </p>
                  </div>
                  <div class={`col-md-4 mt-3 ${styles.secondFooter}`}>
                    <ul>
                      <li>Get the App</li>
                      <li><img src={Google} class="img-fluid" alt=""/></li>
                      <li><img src={Apple} class="img-fluid" alt=""/></li>
                    </ul>
                  </div>
                </div>

  )
}

export default Footer;