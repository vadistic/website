// import { TailwindClassname } from './tailwind-classnames'

// Tailwind babel plugin
declare function tw(classname: string | string[]): string

// SVGs
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

