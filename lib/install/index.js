import loading from '../../components/loading/main.vue'
import dialog from '../../components/dialog/main.vue'
import button from '../../components/button/main.vue'

const list = [
  loading,
  dialog,
  button,
]

const pluginInstall = {
  install: (Vue) => {
    list.forEach(ele => {
      Vue.component(ele.name, ele)
    })
  }
}

export default pluginInstall