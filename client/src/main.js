import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
createApp(App).mount('#app')

function randomYear(start) {
    return new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime())).getFullYear();
  }
  axios.get("http://localhost:3000/calculateAge/"+randomYear(new Date(1950,1,1))
   ).then(response => 
    console.log(response.data.age+' Yaşındasınız.'));