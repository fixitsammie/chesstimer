<template>
  <div id="app">
  
    
    
    <TimerMain></TimerMain>
  </div>
</template>
<script>
import TimerMain from './components/TimerMain';
export default {
  name: 'app',
  components: {TimerMain
  },}


</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
