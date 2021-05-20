<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Button label="switchbot" @click="handleFetch" :disabled="isFetching" />
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
import Button from 'primevue/button';
import ky from 'ky';
import { ref } from 'vue';

const isFetching = ref(false);

const handleFetch = async () => {
  if (isFetching.value) return;
  try {
    const json = await ky
      .get('/api/meter/all', {
        hooks: {
          beforeRequest: [
            () => {
              isFetching.value = true;
            },
          ],
        },
      })
      .json();
    console.log(json);
  } catch (e) {
    console.error(e);
  } finally {
    isFetching.value = false;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
