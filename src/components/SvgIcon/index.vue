<script setup>
import { isExternal as external } from '@/utils/validate'
import { computed, defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

/**
 * 判断是否为外部图标
 * **/

const isExternal = computed(() => external(props.icon))

/**
 * 外部图标样式
 **/

const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

/**
 * 项目内图标
 * **/
const iconName = computed(() => `#icon-${props.icon}`)

</script>

<template>
  <div
    v-if="isExternal"
    :class="className"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg v-else :class="className" aria-hidden="true" class="svg-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>