<template>
  <section 
    class="sq-dialog" 
    v-show="show" 
    @mousedown.self="closeOnClickOuter" 
    @keyup.esc="closeOnPressEsc">
    <transition name="sq-main">
      <div class="sq-dialog_box" ref="sqDialog" v-if="show">
        <slot name="header">
          <div 
            class="sq-dialog_header" 
            :class="{'sq-dialog_prompt': isPrompt}" 
            draggable="true"
            @dragstart="onDragstart"
            @drag="onDrag"
            @dragend="onDragend"
            @dragenter.prevent
            @dragover.prevent
          >
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
      // 初始坐标点
      initialX: 0,
      initialY: 0,
      // 记录上一次的像素坐标偏移量
      lastDX: 0,
      lastDY: 0,
    }
  },
  watch: {
    show(newState) {
      if (newState) {
        document.body.classList.add('sq-dialog_no_overflow')
        this.$nextTick(() => {
          // 恢复到上次移动的位置
          this.translateDialog(this.lastDX, this.lastDY)
        })
      }
      else {
        document.body.classList.remove('sq-dialog_no_overflow')
      }
    }
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
    },
    /**
     * 拖拽开始
     */
    onDragstart(e) {
      this.initialX = e.clientX
      this.initialY = e.clientY
    },
    /**
     * 拖拽过程
     */
    onDrag(e) {
      console.log(e)
      const dX = this.lastDX + e.clientX - this.initialX
      const dY = this.lastDY + e.clientY - this.initialY
      this.translateDialog(dX, dY)
    },
    /**
     * 拖拽结束
     */
    onDragend(e) {
      this.lastDX = this.lastDX + e.clientX - this.initialX
      this.lastDY = this.lastDY + e.clientY - this.initialY
      this.translateDialog(this.lastDX, this.lastDY)
    },
    translateDialog(dx, dy) {
      this.$refs.sqDialog.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
    }
  }
}
</script>
