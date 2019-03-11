<template>
  <div>
    <div class="card shadow-lg floating" :class="shake ? 'shake' : '' || draw ? 'draw' : ''">
      <div class="card-body">
        <h5 class="card-title">
          <font-awesome-icon :icon="['fab', 'facebook']" size="5x" fixed-width />
        </h5>
        <h1>
          <span class="badge">{{ counter.toLocaleString() }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import facebook from '../../providers/facebook'

  export default {
    data () {
      return {
        counter: 0,
        shake: false,
        draw: false
      }
    },
    mounted() {
      this.updateCounter()
      setInterval(async () => {
        this.updateCounter()
      }, 60 * 1000)
    },
    methods: {
      async updateCounter() {
        this.counter = await facebook()
      }
    },
    watch: {
      'counter': function(val, oldVal){
        if (val !== oldVal) {
          this.shake = true
          this.draw = true
          setTimeout(() => {
            this.shake = false
          }, 1000)
          setTimeout(() => {
            this.draw = false
          }, 12000)
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    background-color: rgba(59, 89, 152, 0.8);
    color: #ffffff;
  }

  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .badge {
    background-color: rgba(59, 89, 152, 0.8);
    color: #ffffff;
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .draw {
    overflow: hidden;
    position: relative;
  }
  .draw::before, .draw::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  .draw::before {
    top: 0;
    left: 0;
    border-top-color: #ffffff;
    border-right-color: #ffffff;
    animation: border 2s infinite;
  }
  .draw::after {
    bottom: 0;
    right: 0;
    animation: border 2s 1s infinite, borderColor 2s 1s infinite;
  }

  @keyframes floating {
    from { transform: translate(0,  0px); }
    25%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-15px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(15px, 0, 0);
    }
  }

  @keyframes border {
    0% {
      width: 0;
      height: 0;
    }
    25% {
      width: 100%;
      height: 0;
    }
    50% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes borderColor {
    0% {
      border-bottom-color: #ffffff;
      border-left-color: #ffffff;
    }
    50% {
      border-bottom-color: #ffffff;
      border-left-color: #ffffff;
    }
    51% {
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    100% {
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
</style>
