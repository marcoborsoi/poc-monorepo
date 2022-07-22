<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import './VCard.scss'
import { computed } from 'vue'

interface Props {
  primary: boolean
}

const props = defineProps<Props>()

const classes = computed(() => {
  return {
    'v-card': true,
  }
})
</script>

<!-- <style lang="scss" scoped>
.v-card {
  background-color: #ffffff;
  box-shadow: rgba(59, 63, 73, 0.15) 0px 4px 8px 0px;
  display: block;
  padding: 12px;
}
</style> -->
