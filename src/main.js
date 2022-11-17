import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//setting up font awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//adding icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


library.add(faTwitter)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
