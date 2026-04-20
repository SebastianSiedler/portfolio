import { Tooltip } from '@base-ui/react/tooltip';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
  toggleDark: string;
  toggleLight: string;
}

export default function ThemeToggle({ toggleDark, toggleLight }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  const label = isDark ? toggleLight : toggleDark;

  return (
    <Tooltip.Provider delay={300}>
      <Tooltip.Root>
        <Tooltip.Trigger
          onClick={toggle}
          aria-label={label}
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md cursor-pointer',
            'border border-gray-200 dark:border-gray-700',
            'text-gray-600 dark:text-gray-400',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'transition-colors',
          )}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup className="rounded-md bg-gray-900 dark:bg-gray-100 px-2.5 py-1 text-xs text-white dark:text-gray-900 z-50">
              {label}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
