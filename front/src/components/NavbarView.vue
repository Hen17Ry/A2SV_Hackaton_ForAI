<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/" class="navbar-item" style="display: flex;">
          <h3 style="text-transform: uppercase; margin-inline-start: 10px;">My Sauti</h3>
        </a>
        <div class="navbar-burger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div :class="{'is-active': isActive}" class="navbar-menu">
        <div class="navbar-end">
          <a href="#" class="navbar-item">À propos</a>
          <a href="#" class="navbar-item">S'inscrire</a>
          <a href="#" class="navbar-item">Se connecter</a>
          <a href="#" class="navbar-item">Contactez-nous</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #9100ff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: background-color 0.3s;
  }
  
  .navbar:hover {
    background-color: #6e00cc;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  
  .navbar-item {
    color: white;
    padding: 1rem 1.5rem;
    text-decoration: none;
    font-size: 1.25rem;
    transition: background-color 0.3s;
  }
  
  .navbar-item:hover {
    background-color: #e74c3c;
  }
  
  .navbar-burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .navbar-burger span {
    height: 4px;
    width: 30px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s;
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
    transition: max-height 0.3s ease-out;
  }
  
  .navbar-end {
    display: flex;
    align-items: center;
  }
  
  @media screen and (max-width: 768px) {
    .navbar-burger {
      display: flex;
      margin-inline-start: 80px;
    }
  
    .navbar-menu {
      display: none;
      width: 100%;
    }
  
    .navbar-menu.is-active {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #9100ff;
    }
  
    .navbar-end {
      flex-direction: column;
      width: 100%;
    }
  
    .navbar-item {
      text-align: center;
      width: 100%;
      padding: 1.5rem 0;
      font-size: 1.5rem;
    }
  
    .navbar-item:hover {
      background-color: #6e00cc;
    }
  }
  </style>
  