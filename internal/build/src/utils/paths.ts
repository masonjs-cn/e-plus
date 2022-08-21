import path from "path";

// // 项目根目录
export const projectRoot = path.resolve(__dirname, "../../");

// // 打包输出目录
export const outDir = path.resolve(__dirname, "../../dist");

// // e-plus 入口 index.ts
export const wpRoot = path.resolve(__dirname, "../../packages/e-plus");

// // 组件目录
export const compRoot = path.resolve(projectRoot, "packages/components");
