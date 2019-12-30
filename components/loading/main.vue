<template>
  <transition name="fade">
    <section
      class="sq-loading"
      :class="{fixed: position == 'fixed', absolute: position != 'fixed'}"
      v-if="show"
    >
      <div class="loading">
        <img class="spiner-circle" src="../../asset/loading.svg" alt="...">
        <p class="text" v-if="text.length > 0">{{ text }}</p>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'sq-loading',
  props: {
    // ['fixed', 'absolute'], 默认值：absolute
    position: {
      type: String,
      default: 'absolute'
    },
    text: {
      type: String,
      default: 'Loading...'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(newState) {
      if (newState) {
        document.body.classList.add('__no-overflow')
      }
      else {
        document.body.classList.remove('__no-overflow')
      }
      this.show = newState
    }
  }
}
</script>