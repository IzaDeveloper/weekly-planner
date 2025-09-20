import useThemeStore from '../store/ThemeStore'
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 text-sm font-medium text-white focus:outline-none bg-zinc-900 rounded-lg hover:bg-zinc-700 dark:bg-amber-400 dark:hover:bg-amber-500 cursor-pointer"
    >
        {theme === 'light' ? <MoonIcon size={20} />  : <SunIcon size={20} />}
    </button>
  )
}

export default ThemeToggle;