// import { TailwindClassname } from './tailwind-classnames'

// Gatsby graphql queries
declare const graphql: (query: TemplateStringsArray) => void;

// Tailwind babel plugin
declare function tw(classname: string | string[]): string

// SVGs
declare module "*.svg" {
  const content: any;
  export default content;
}

// PNGs
declare module "*.png" {
  const content: any;
  export default content;
}

