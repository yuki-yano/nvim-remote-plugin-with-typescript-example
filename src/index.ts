import { NvimPlugin } from "neovim"

module.exports = (plugin: NvimPlugin) => {
  plugin.setOptions({ dev: true, alwaysInit: true })

  plugin.registerCommand("HelloTypeScript", () => {
    plugin.nvim.command("echo 'Hello TypeScript!'")
    console.log("Hello TypeScript!")
  })
}
