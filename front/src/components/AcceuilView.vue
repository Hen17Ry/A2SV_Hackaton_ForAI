<template>
    <div class="container">
      <div class="text-section">
        <h1>Welcome to My Sauti</h1>
        <p>Our web application promotes the empowerment and development of mute and deaf individuals, providing them with the tools they need to succeed.</p>
      </div>
      <div class="image-section">
        <img src="/deaf.jpg" alt="Illustration">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageTextComponent',
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 10px;
  }
  
  .image-section {
    flex-shrink: 0;
    max-width: 40%; /* Limite la largeur de l'image pour éviter qu'elle soit trop grande */
  }
  
  .image-section img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .text-section {
    margin-right: 2rem;
    color: #333;
    max-width: 60%; /* Limite la largeur du texte pour qu'il ne prenne pas trop de place */
  }
  
  .text-section h1 {
    font-size: 4.5rem;
    font-family: 'Poppins', sans-serif;
    color: #9100ff;
    margin-bottom: 1rem;
  }
  
  .text-section p {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
  
    .text-section {
      margin-right: 0;
      margin-top: 1rem;
    }
  
    .image-section {
      max-width: 80%; /* Ajuste la taille de l'image pour les écrans plus petits */
    }
  
    .text-section h1 {
      font-size: 2rem;
    }
  
    .text-section p {
      font-size: 1.2rem;
    }
  }
  </style>
  