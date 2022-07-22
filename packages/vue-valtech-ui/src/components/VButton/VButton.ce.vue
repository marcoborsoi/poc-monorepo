<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import './VButton.scss'
import { computed } from 'vue'

interface Props {
  primary: boolean
}

const props = defineProps<Props>()

const classes = computed(() => {
  return {
    'v-button': true,
    'v-button--primary': props.primary,
  }
})
</script>

<!-- <style lang="scss" scoped>
.v-button {
  border: 0;
  border-radius: 3em;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  padding: 10px 20px;
}

.v-button--primary {
  background-color: #1ea7fd;
  color: #ffffff;
}
</style> -->