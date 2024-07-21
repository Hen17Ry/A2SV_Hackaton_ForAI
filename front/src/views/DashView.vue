<template>
  <div class="container">
    <div :class="['vertical-nav', { 'nav-open': isOpen }]">
      <div class="app-name">My Sauti</div>
      <div class="toggle-btn" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="menu">
        <li @click="selectMenuItem('lessons')" class="nav-item">
          <i class="fas fa-book"></i>
          <span>Lessons</span>
        </li>
        <li @click="selectMenuItem('blog')" class="nav-item">
          <i class="fas fa-blog"></i>
          <span>Blog</span>
        </li>
        <li @click="selectMenuItem('traduction')" class="nav-item">
          <i class="fas fa-language"></i>
          <span>Traduction</span>
        </li>
      </ul>
      <ul class="logout-menu">
        <li @click="logout" class="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <input
        type="text"
        class="input-link"
        placeholder="Paste The Link Here"
        v-model="link"
        @input="updateVideoSource"
      />
      <div class="video-container">
        <div class="avatar"></div>
        <div class="video">
          <video
            id="video-player"
            class="video-js vjs-default-skin"
            controls
            preload="auto"
            width="600"
            height="400"
            data-setup="{}"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default {
  name: 'VerticalNav',
  data() {
    return {
      isOpen: false,
      selectedMenuItem: '',
      link: '',
    };
  },
  mounted() {
    this.player = videojs('video-player', {
      controls: true,
      autoplay: false,
      preload: 'auto',
    });
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
    selectMenuItem(menuItem) {
      this.selectedMenuItem = menuItem;
      console.log(`Selected menu item: ${menuItem}`);
      // Additional logic to handle menu selection
    },
    logout() {
      console.log('Logging out...');
      // Add your logout logic here
    },
    updateVideoSource() {
      if (this.link) {
        this.player.src({ type: 'video/mp4', src: this.link });
      }
    },
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.vertical-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background-color: #9100ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s;
  overflow-x: hidden;
}

.nav-open {
  width: 250px;
}

.app-name {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  transition: opacity 0.3s;
  opacity: 0;
}

.nav-open .app-name {
  opacity: 1;
}

.toggle-btn {
  cursor: pointer;
}

.toggle-btn span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.nav-open .toggle-btn span:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.nav-open .toggle-btn span:nth-child(2) {
  opacity: 0;
}

.nav-open .toggle-btn span:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -6px);
}

.menu, .logout-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logout-menu {
  margin-bottom: 1rem;
}

.vertical-nav li {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-item {
  margin: 20px 0;
}

.vertical-nav li i {
  margin-right: 1rem;
}

.vertical-nav li:hover,
.vertical-nav li.selected {
  background-color: #7b00d3;
  transform: scale(1.05);
}

.vertical-nav li span {
  transition: opacity 0.3s;
  opacity: 0;
  white-space: nowrap;
}

.nav-open li span {
  opacity: 1;
}

.main-content {
  margin-left: 80px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.input-link {
  width: 100%;
  max-width: 600px;
  height: 50px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.video-container {
  width: 100%;
  max-width: 1400px;
  height: 600px;
  margin-top: 50px;
  display: flex;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
}

.avatar {
  width: 50%;
  height: 100%;
  background-color: blue;
}

.video {
  width: 50%;
  height: 100%;
}

.video-player {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .vertical-nav {
    width: 60px;
  }

  .nav-open {
    width: 200px;
  }

  .app-name {
    font-size: 1.2rem;
  }

  .vertical-nav li {
    font-size: 1rem;
  }

  .toggle-btn span {
    width: 25px;
  }

  .input-link {
    width: 90%;
  }

  .video-container {
    flex-direction: column;
  }

  .avatar, .video {
    width: 100%;
    height: 50%;
  }
}
</style>
