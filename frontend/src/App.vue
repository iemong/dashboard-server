<template>
  <h1>直近24時間でダニが増えている確率</h1>
  <p>{{ percentage }}</p>
  <Button
    label="switchbot"
    @click="handleFetch"
    :disabled="isFetching"
    v-if="false"
  />
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import ky from 'ky';
import { computed, onMounted, ref } from 'vue';

type Meter = {
  id: number;
  deviceId: string;
  deviceType: string;
  hubDeviceId: string;
  humidity: number;
  temperature: number;
  createdAt: Date;
};

const isFetching = ref(false);

const timeLength = ref(0);
const wholeTimeLength = ref(0);

const temperatureRange: [number, number] = [25, 30];
const humidityRange: [number, number] = [60, 80];

const isInRange = (range: [number, number]) => (value: number) =>
  range[0] < value && value <= range[1];

const isInTemperatureRange = isInRange(temperatureRange);
const isInHumidityRange = isInRange(humidityRange);

const handleFetch = async () => {
  if (isFetching.value) return;
  try {
    const meterList = await ky
      .get('/api/meter/today', {
        hooks: {
          beforeRequest: [
            () => {
              isFetching.value = true;
            },
          ],
        },
      })
      .json<Meter[]>();
    wholeTimeLength.value = meterList.length
    timeLength.value = meterList.reduce((acc, cur) => {
      if (
        isInTemperatureRange(cur.temperature) &&
        isInHumidityRange(cur.humidity)
      ) {
        acc += 1;
      }
      return acc;
    }, 0);
  } catch (e) {
    console.error(e);
  } finally {
    isFetching.value = false;
  }
};

handleFetch();

const percentage = computed(() => {
  const result =  timeLength.value / wholeTimeLength.value
  return isNaN(result) ? '計測できません' : `${result}%`
})

const timerId = ref<number | null>(null);
onMounted(() => {
  if (timerId.value) {
    clearInterval(timerId.value);
    timerId.value = null;
  }
  timerId.value = setInterval(() => {
    handleFetch();
  }, 60 * 60 * 1000);
});
</script>

<style>
html {
  font-size: 16px;
  font-family: 'Hachi Maru Pop', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  background-color: #222;
  padding: 32px;
  box-sizing: border-box;
}

#app {
  text-align: center;
}

h1 {
  color: #eee;
  font-size: 48px;
  text-align: left;
}

p {
  color: #eee;
  font-size: 128px;
  text-align: left;
  font-weight: bold;
  padding-left: 32px;
}
</style>
