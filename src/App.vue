<template>
  <div class="container-fluid">
    <app-header/>
    <app-roulette/>
    <app-footer/>
  </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Roulette from './components/Roulette/Roulette';

    export default {
        components: {
            'app-header': Header,
            'app-roulette': Roulette,
            'app-footer': Footer
        }
    }

</script>

<style lang="scss">
  @import './assets/styles/custom-bootstrap';
  @import './assets/styles/animations';
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import '../node_modules/vue2-animate/dist/vue2-animate.min.css';


  body {
    background: url('./assets/redlights_bg.jpg') no-repeat center center fixed;
    background-size: cover;
    color: $white;
    overflow: hidden;
  }

  // App global styles
  button {
    &:focus {
      outline: none;
    }
  }

  .card {
    color: $gray-dark;
  }

  .section__wrap {
    position: relative;
    min-height: 390px;
    background-color: rgba(0, 0, 0, 0.21);
    border: 1px solid rgba(35, 35, 35, 0.21);

    .block-title {
      padding: 15px;
      text-align: center;
      text-transform: uppercase;
    }

    .btn-reset {
      float: right;
    }
  }

  .randomOutput__wrap {
    position: relative;
    border: 1px dashed rgba(255, 255, 255, 0.6);
    background: rgba(35, 37, 38, 0.56);
    color: yellow;
    text-shadow: 1px 0 8px rgba(0, 0, 0, 0.4);
    font-size: 30px;
    border-radius: 0;
    text-transform: uppercase;
    min-height: 95px;
    padding: 5px 0;
    line-height: 3;

    .placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    .btn {
      position: absolute;
      right: 10px;
      top: 30px;
    }
  }

  .text-blue {
    font-size: 0.9em;
    color: #00c5ee;
  }

  .btn-reset {
    font-size: 11px;
    padding: 5px 5px;
    opacity: 0.4;
    text-transform: uppercase;
    line-height: 1;

    &:hover {
      opacity: 1;
    }
  }
</style>
