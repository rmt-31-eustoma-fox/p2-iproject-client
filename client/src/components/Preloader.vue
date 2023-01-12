<script>
export default {
    
}
</script>

<template>
    <div class="cont">
      <svg class="spinner" width="90px" height="90px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
</template>

<style scoped>


.cont {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 9999;
  transition: all 1s;
  backdrop-filter: blur(3px);
}

.spinner {
  animation: rotator 2s linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    dash 5s ease-in-out infinite, 
    colors calc(1.4s * 4) ease-in-out infinite;
}

@keyframes colors {
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}
 @keyframes colors {
  0% { stroke: #4285F4; }
  25% { stroke: blue; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}

@keyframes dash {
 0% { stroke-dashoffset: 187; }
 50% {
   stroke-dashoffset: 99;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: 187;
   transform:rotate(450deg);
 }
}
</style>