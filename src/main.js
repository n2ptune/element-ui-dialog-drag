import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import CustomDialog from './components/CustomDialog.vue'
import './assets/element.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.directive('drag-outside', {
  inserted(el, binding, vNode) {
    const component = vNode.componentInstance
    if (typeof component.beforeClose !== 'function' || true) {
      const temp = component.handleWrapperClick
      component.handleWrapperClick = () => {
        if (component.isMouseDown) return
        temp()
      }
      component.$refs.dialog.addEventListener('mousedown', (e) => {
        component.isMouseDown = true
      })
      component.$refs.dialog.addEventListener('mouseup', (e) => {
        component.isMouseDown = false
      })
      el.addEventListener('mouseup', (e) => {
        if (component.isMouseDown) {
          setTimeout(() => (component.isMouseDown = false))
        }
      })
    }
  }
})

Vue.component('el-dialog', CustomDialog)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
