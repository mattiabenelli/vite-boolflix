import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'

library.add(fas, far);

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
