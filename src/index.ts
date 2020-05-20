import { NvimPlugin } from "neovim"

import { sum } from "./sum"

module.exports = (plugin: NvimPlugin) => {
  if (process.env.REMOTE_PLUGIN_TS_DEBUG === "1") {
    plugin.setOptions({ dev: true, alwaysInit: true })
  }

  plugin.registerCommand("HelloTypeScript", () => {
    plugin.nvim.command("echo 'Hello TypeScript!'")
    console.log("Hello TypeScript!")
  })

  plugin.registerFunction("TypeScriptSum", sum, { sync: true })
}
