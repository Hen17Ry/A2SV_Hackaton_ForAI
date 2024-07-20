<template>
    <section class="about-us">
      <div class="container">
        <h2>About Us</h2>
        <p>Discover the powerful features of our platform that are designed to support and empower the mute and deaf community:</p>
        <div class="features">
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z"/></svg>
            <h3>Blog</h3>
            <p>Stay informed and engaged with our regularly updated blog posts covering a range of topics related to deaf and mute communities.</p>
          </div>
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512"><path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
            <h3>Online Courses</h3>
            <p>Access a variety of online courses designed to help individuals enhance their skills and knowledge in different areas.</p>
          </div>
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path d="M544 160l-.1 72.6c-.1 52.2-24 101-64 133.1c.1-1.9 .1-3.8 .1-5.7l0-8c0-71.8-37-138.6-97.9-176.7l-60.2-37.6c-8.6-5.4-17.9-8.4-27.3-9.4L248.7 48.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l78 135.1c3.3 5.7 10.7 7.7 16.4 4.4s7.7-10.7 4.4-16.4l-62-107.4c-6.6-11.5-2.7-26.2 8.8-32.8S362 5 368.6 16.5l68 117.8s0 0 0 0s0 0 0 0l43.3 75L480 160c0-17.7 14.4-32 32-32s32 14.4 32 32zM243.9 88.5L268.5 131c-13.9 4.5-26.4 13.7-34.7 27c-.9 1.4-1.7 2.9-2.5 4.4l-28.9-50c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zm-46.4 63.7l26.8 46.4c.6 6 2.1 11.8 4.3 17.4l-4.7 0-13.3 0s0 0 0 0L179 216l-23-39.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zM260.9 175c9.4-15 29.1-19.5 44.1-10.2l60.2 37.6C416.7 234.7 448 291.2 448 352l0 8c0 83.9-68.1 152-152 152l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l92 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L88 440c-13.3 0-24-10.7-24-24s10.7-24 24-24l124 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L56 368c-13.3 0-24-10.7-24-24s10.7-24 24-24l156 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L88 296c-13.3 0-24-10.7-24-24s10.7-24 24-24l136 0s0 0 0 0s0 0 0 0l93.2 0L271 219.1c-15-9.4-19.5-29.1-10.2-44.1z"/></svg>
            <h3>Real-Time Translation</h3>
            <p>Utilize our real-time translation services to seamlessly communicate and interact in various languages and sign languages.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  .about-us {
    padding: 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #9100ff;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .feature-item {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 300px;
    text-align: center;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.75rem;
    color: #9100ff;
    margin-bottom: 1rem;
  }
  
  .feature-item p {
    font-size: 1rem;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .features {
      flex-direction: column;
    }
  
    .feature-item {
      width: 100%;
      margin-bottom: 2rem;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
  </style>
  