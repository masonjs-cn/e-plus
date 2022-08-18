<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { useNamespace } from "@e-plus/hook/index";
import { computed, CSSProperties } from "vue";
import { iconProps } from "./icon";
const bem = useNamespace("icon");
defineOptions({
  name: "EIcon",
});
const props = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {};
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
