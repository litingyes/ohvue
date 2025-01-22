import { resolve } from 'node:path'
import { copySync, emptyDirSync } from 'fs-extra'

function main() {
  const distPath = resolve(__dirname, '../dist')
  emptyDirSync(distPath)

  copySync(resolve(__dirname, '../scss'), resolve(distPath, 'scss'))
}

main()
