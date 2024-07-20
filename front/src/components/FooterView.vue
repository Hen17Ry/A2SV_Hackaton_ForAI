<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h2>My Sauti</h2>
          <p>
            Empowering the mute and deaf communities with our innovative web applications. Join us in making a difference.
          </p>
          <div class="socials">
            <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M389.2 48h70.6L205.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
          </div>
        </div>
        <div class="footer-section links">
          <h2>Liens utiles</h2>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Subscription</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:contact@mysauti.com">contact@mysauti.com</a></p>
          <p>Téléphone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 My Sauti. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterView',
  };
  </script>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #7b00d3, #9100ff);
    color: #fff;
    padding: 2rem 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    margin: 1rem;
    flex: 1;
    min-width: 220px;
  }
  
  .footer-section h2 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
  
  .footer-section p,
  .footer-section ul {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .footer-section a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-section a:hover {
    text-decoration: underline;
  }
  
  .socials {
    margin-top: 1rem;
  }
  
  .socials a {
    display: inline-block;
    margin: 0 10px;
    font-size: 1.75rem;
    color: #fff;
    transition: color 0.3s, transform 0.3s;
  }
  
  .socials a:hover {
    color: #e0e0e0;
    transform: scale(1.1);
  }
  
  .footer-bottom {
    background-color: #7b00d3;
    padding: 1rem 0;
  }
  
  .footer-bottom p {
    margin: 0;
    font-size: 0.875rem;
  }
  </style>
  