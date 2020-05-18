<template>
  <div class="footer_copyright">
    Cooked at <a href="https://430.lt" target="_blank">04:30 AM</a>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .footer_copyright{
    position: absolute;
    bottom: 3px;
    width:100%;
    text-align: center;
    font-size: 11px;
    opacity: 0.5;
    a{
      color: #fff;
      position: relative;
      font-weight: bold;
      display: inline-block;
      text-decoration: none;
      transition: all .3s linear;
    }
    a:before, a:after{
      content: '';
      background: #e74c3c;
      position: absolute;
      width: 0;
      height: 1px;
      transition: all .3s linear;
    }
    a:before{
      top: -2px;
      left: 0;
    }
    a:after{
      top: 100%;
      right: 0;
    }
    &:hover{
      opacity: 0.9;
      a{
        color: #fff;
        text-shadow: 0px 0px 5px rgba(0,0,0,0.69);
      }
      a:before, a:after{
        width: 100%;
      }
    }
  }
</style>
