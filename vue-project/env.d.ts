/// <reference types="vite/client" />
// src/env.d.ts
/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  // Добавьте это, если не создавали отдельный файл для vue-input-facade
  declare module "vue-input-facade" {
    export const facade: any; // Замените `any` на точные типы, если они известны
  }