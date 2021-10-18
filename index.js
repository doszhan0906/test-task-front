import Vue from 'vue'
import App from './src/app.vue'
import store from './src/store/store'
new Vue({
    el:"#app",
    store: store,
    render:(h)=>h(App)
})