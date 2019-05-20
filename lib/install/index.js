import loading from '../../components/loading/main.vue'

const pluginInstall = {
  install: (Vue) => {
    Vue.component(loading.name, loading)
  }
}

export default pluginInstall