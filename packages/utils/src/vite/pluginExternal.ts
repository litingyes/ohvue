import type { Plugin } from 'vite'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { cwd } from 'node:process'

export default {
  name: 'external',
  config() {
    const info = getPackageJsonInfo(cwd())
    if (!info) {
      return null
    }

    const deps = Array.from(new Set([...Object.keys(info.dependencies ?? {}), ...Object.keys(info.peerDependencies ?? {})]))

    return ({
      build: {
        rollupOptions: {
          external: deps,
        },
      },
    })
  },
} satisfies Plugin

function getPackageJsonInfo(cwd: string) {
  let currentDir = cwd
  let packageJsonPath: string | null = null

  while (true) {
    packageJsonPath = join(currentDir, 'package.json')

    if (existsSync(packageJsonPath)) {
      break
    }

    const parentDir = dirname(currentDir)
    if (parentDir === currentDir) {
      return null
    }
    currentDir = parentDir
  }

  const data = readFileSync(packageJsonPath, 'utf-8')

  try {
    return JSON.parse(data) as {
      dependencies?: Record<string, string>
      peerDependencies?: Record<string, string>
    }
  }
  catch (_) {
    return null
  }
}
