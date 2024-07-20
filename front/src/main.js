import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(router)

app.use(
    createAuth0({
      domain: "dev-zxdu73mzpa1xyxh8.us.auth0.com",
      clientId: "NP4lewT9KJeSLV5ia26Uh7pocvnp6epT",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.mount('#app')
