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
  width: 100px;
  height: 120px;
  transform: translate(-50px,-50px);
}
.spiner-circle {
  width: 56px;
  height: 80px;
  margin: 0 auto 20px;
  display: block;
  animation: circle-rotate 1.5s linear infinite;
}
.text {
  width: 100px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-family: "monaco";
  text-align: center;
  color: #44a8e8;
  user-select: none;
}

@keyframes circle-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
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
        <svg
          aria-hidden="true"
          class="spiner-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          transform
          viewBox="0 0 512 512"
        >
          <!-- 齿轮样式 -->
          <path
            fill="#44a8e8"
            d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"
          ></path>
        </svg>
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