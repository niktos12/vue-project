/// <reference types="vite/client" />
// src/env.d.ts
/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  // Добавьте это, если не создавали отдельный файл для vue-input-facade
  declare module 'vue-the-mask' {
    import { Component } from 'vue';
    export const TheMask: Component;
  }