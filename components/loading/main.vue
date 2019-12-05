<style lang='scss' scoped>
.sq-loading {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0,0%,100%,0.7);
  z-index: 8000;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50px,-50px);
  display: flex;
  align-items: center;
}
.spiner-circle {
  width: 56px;
}
.text {
  max-width: 200px;
  line-height: 20px;
  padding-left: 10px;
  margin: 0;
  font-size: 16px;
  font-family: "monaco";
  color: #44a8e8;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}
</style>

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