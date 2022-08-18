import { withInstall } from "@e-plus/utils/index";

import _Icon from "./src/icon.vue";
const Icon = withInstall(_Icon); // 生成带有install方法的组件

export default Icon; // 导出Icon组件
export type { IconProps } from "./src/icon";

declare module "vue" {
  export interface GlobalComponents {
    EIcon: typeof Icon;
  }
}
