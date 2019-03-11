<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4 text-center">
          <twitter-counter />
        </div>
        <div class="col-4 text-center">
          <facebook-counter />
        </div>
        <div class="col-4 text-center">
          <instagram-counter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TwitterCounter from './LandingPage/TwitterCounter'
  import FacebookCounter from './LandingPage/FacebookCounter'
  import InstagramCounter from './LandingPage/InstagramCounter'

  export default {
    name: 'landing-page',
    components: {
      TwitterCounter,
      FacebookCounter,
      InstagramCounter
    }
  }
</script>

<style>
  body {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container {
    margin-top: 50vh;
    transform: translateY(-50%);
  }
</style>
