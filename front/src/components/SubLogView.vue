<template>
    <div class="contall">
     <h1 style="font-size: 20px; margin-bottom: 20px;">Inscription/Connexion</h1>
     <div class="container" :class="{ 'panel-active': panelActive }" id="container">
       <div class="form-container sign-up-container">
         <form>
           <h1>Créer un compte</h1>
           <div class="social-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M389.2 48h70.6L205.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
           </div>
           <span>Utiliser compte Gmail</span>
           <input type="text" placeholder="Nom" v-model="signupForm.name">
           <input type="text" placeholder="Classe" v-model="signupForm.classe">
           <input type="email" placeholder="Email" v-model="signupForm.email">
           <input type="password" placeholder="Mot de passe" v-model="signupForm.password">
           <button @click="open">Créer le compte</button>
         </form>
       </div>
       <div class="form-container login-container">
         <form>
           <h1>Se connecter</h1>
           <div class="social-container" @click="login">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M389.2 48h70.6L205.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
           </div>
           <span>Je n'ai pas de compte</span>
           <input type="email" placeholder="Email" v-model="loginForm.email">
           <input type="password" placeholder="Mot de passe" v-model="loginForm.password">
           <button type="submit" >Se connecter</button>
         </form>
       </div>
   
       <div class="overlay-container">
         <div class="overlay">
           <div class="overlay-panel overlay-left">
             <h1>Bienvenue sur My Sauti</h1>
             <p>Rejoignez-nous pour découvrir toutes les fonctionnalités que nous offrons.</p>
             <button class="ghost" @click="togglePanel(false)">Se connecter</button>
           </div>
           <div class="overlay-panel overlay-right">
             <h1>Créer un compte</h1>
             <p>Pour accéder à toutes nos fonctionnalités, inscrivez-vous dès maintenant.</p>
             <button class="ghost" @click="togglePanel(true)">Créer un compte</button>
           </div>
         </div>
       </div>
     </div>
    </div>
   </template>
   
   <script>
   import { useAuth0 } from '@auth0/auth0-vue';
   export default {
     data() {
       return {
         panelActive: false,
         loginForm: {
           email: '',
           password: ''
         },
         signupForm: {
           name: '',
           email: '',
           password: ''
         }
       };
     },
     setup() {
      const { loginWithRedirect } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        }
      };
    },
     methods: {
       togglePanel(isActive) {
         this.panelActive = isActive;
       },
     }
   };
   </script>
   
   <style scoped>
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
   
   * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   
   .contall{
     width: 100%;
     height: 100%;
     padding-top: 170px;
     padding-bottom: 170px;
     display: flex;
     justify-content: center;
     text-align: center;
     align-items: center;
     flex-direction: column;
   }
   
   .container {
     position: relative;
     overflow: hidden;
     min-height: 480px;
     width: 768px;
     max-width: 100%;
     background-color: #fff;
     border-radius: 10px;
     box-shadow: 0 8px 24px rgba(0, 32, 63, .45), 0 8px 8px rgba(0, 32, 63, .45);
   }
   
   .form-container {
     position: absolute;
     top: 0;
     height: 100%;
     transition: .6s ease-in-out;
   }
   
   .sign-up-container {
     left: 0;
     width: 50%;
     opacity: 0;
     z-index: 1;
   }
   svg{
    margin-inline-start: 15px;
   }
   .container.panel-active .sign-up-container {
     transform: translateX(100%);
     opacity: 1;
     z-index: 5;
     animation: show .6s;
   }
   
   @keyframes show {
     0%, 49.99% {
       opacity: 0;
       z-index: 1;
     }
     50%, 100% {
       opacity: 1;
       z-index: 5;
     }
   }
   
   .container.panel-active .login-container {
     transform: translateX(100%);
   }
   
   .login-container {
     left: 0;
     width: 50%;
     z-index: 2;
   }
   
   form {
     background-color: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 50px;
     height: 100%;
     text-align: center;
   }
   
   input {
     background-color: #f3e5f5;
     border: none;
     padding: 12px 15px;
     margin: 8px 0;
     width: 100%;
   }
   
   button.ghost {
     background-color: transparent;
   }
   
   button {
     background-color: #9100ff;
     color: #fff;
     border: 1px solid #9100ff;
     font-size: 16px;
     font-weight: bold;
     padding: 16px 32px;
     margin-top: 24px;
     letter-spacing: 1px;
     border-radius: 50px;
     border-color: rgba(0, 32, 63, .45);
     transition: .2s ease-in;
   }
   
   button:hover {
     cursor: pointer;
     background-color: #7b00d3;
     color: #fff;
   }
   
   button:active {
     transform: scale(.95);
   }
   
   .social-container {
     margin: 24px 0;
   }
   
   .social-container a {
     display: inline-flex;
     justify-content: center;
     align-items: center;
     margin: 0 4px;
     height: 40px;
     width: 40px;
     border-radius: 50%;
     background-color: #f3e5f5;
     border: 1px solid rgba(0, 32, 63, .45);
   }
   
   h1 {
     margin: 0;
     font-size: 24px;
     color: #9100ff;
   }
   
   span {
     font-size: 14px;
   }
   
   a {
     text-decoration: none;
     font-size: 14px;
     margin: 8px 0 16px;
     color: #333;
   }
   
   .overlay-container {
     position: absolute;
     top: 0;
     left: 50%;
     width: 50%;
     height: 100%;
     overflow: hidden;
     z-index: 100;
     transition: transform .6s ease-in-out;
   }
   
   .container.panel-active .overlay-container {
     transform: translateX(-100%);
   }
   
   .overlay {
     background: linear-gradient(to right, #9100ff, #d2b9ff);
     color: #fff;
     position: relative;
     left: -100%;
     height: 100%;
     width: 200%;
     transform: translateX(0);
     transition: transform .6s ease-in-out;
   }
   
   .container.panel-active .overlay {
     transform: translateX(50%);
   }
   
   .overlay-panel {
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform .6s ease-in-out;
   }
   
   .overlay-left {
     transform: translateX(-20%);
   }
   
   .container.panel-active .overlay-left {
     transform: translateX(0);
   }
   
   .overlay-right {
     right: 0;
     transform: translateX(0);
   }
   
   .container.panel-active .overlay-right {
     transform: translateX(20%);
   }
   
   p {
     font-size: 14px;
     font-weight: 100;
     line-height: 20px;
     letter-spacing: .5px;
     margin: 20px 0 20px;
   }
   </style>
   