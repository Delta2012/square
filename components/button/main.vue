<template>
  <button class="sq-button" :class="dynamicClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'sq-button',
  props: {
    type: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    }
  },
  computed: {
    dynamicClass() {
      if (this.type == 'confirm') {
        return 'sq-button_confirm'
      }
      return ''
    }
  },
  created() {
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>