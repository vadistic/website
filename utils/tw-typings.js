#! /usr/bin/env node

const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync

const genTailwindClassnames = () => {
  const classnames = readFileSync(`${process.cwd()}/tailwind.custom.css`)
    .toString()
    .match(/\.[^ \n]+(?= {)/g)
    .map(classname => classname.replace(/[\.\\]+/g, ''))

  let typings = `export type TailwindClassname =\n`

  classnames.forEach(classname => {
    typings += `| '${classname}'\n`
  })

  writeFileSync(`${process.cwd()}/src/types/tailwind-classnames.d.ts`, typings)

  console.log('Tailwind typings generated')
}

module.exports = genTailwindClassnames()
