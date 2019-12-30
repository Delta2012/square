<template>
  <section 
    class="sq-dialog" 
    v-show="show" 
    @mousedown.self="closeOnClickOuter" 
    @keyup.esc="closeOnPressEsc">
    <transition name="sq-main">
      <div class="sq-dialog_box" v-if="show">
        <slot name="header">
          <div class="sq-dialog_header" :class="{'sq-dialog_prompt': isPrompt}">
            <span class="sq-dialog_title">{{ title }}</span>
            <button type="button" class="sq-dialog_close" @click="close">×</button>
          </div>
        </slot>
        <div class="sq-dialog_body">
          <slot></slot>
        </div>
        <slot name="footer">
          <div class="sq-dialog_footer">
            <sq-button type="confirm" @click="confirm">确认</sq-button>
            <sq-button @click="cancel">取消</sq-button>
          </div>
        </slot>
      </div>
    </transition>
  </section>
</template>

<script>
import sqButton from '../button/main'
export default {
  name: 'sq-dialog',
  components: {
    sqButton
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '会话标题'
    },
    'close-by-outer': {
      type: Boolean,
      default: false
    },
    'close-by-esc': {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isPrompt: false,
    }
  },
  created() {
  },
  methods: {
    /**
     * 关闭
     */
    close() {
      this.$emit('change', false)
      this.$emit('close')
    },
    /**
     * 取消
     */
    cancel() {
      this.$emit('change', false)
      this.$emit('cancel')
    },
    /**
     * 确认
     */
    confirm() {
      this.$emit('confirm')
    },
    closeOnClickOuter(e) {
      if (this.closeByOuter) {
        this.close()
      }
      else {
        this.showPrompt()
      }
    },
    closeOnPressEsc(e) {
      if (this.closeByEsc) {
        this.close()
      }
    },
    showPrompt() {
      const intervalId = setInterval(() => {
        this.isPrompt = !this.isPrompt
      }, 100)
      setTimeout(() => {
        clearInterval(intervalId)
        this.isPrompt = false
      }, 1000)
    }
  }
}
</script>
