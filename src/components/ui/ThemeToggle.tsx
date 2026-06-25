import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H4zm15 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM5.64 6.05a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71zm12.02 12.02a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71zm.71-12.02-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41zM6.35 18.07l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}
