import Vue from 'vue'                     //importação do módulo vue o global view object Vue
import App from './App.vue'

new Vue({                                 //Vue instance - instancia criada a partir do global vue object, para um component de view
  el: '#app',                             //cm id do elemento 'div, nesse caso' dentro do html que eu quero renderizar 
  render: h => h(App)
})
