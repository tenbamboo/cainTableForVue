
import Hello from './components/Hello.vue'


function install(Vue){
  Vue.component("hello", Hello);
}
export {
  Hello,
  install
};

export default Hello;
