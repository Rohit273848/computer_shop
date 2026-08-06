import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const renderIcon = () => {
    if (theme === 'system') return <Laptop className="w-4 h-4 text-accent" />;
    return resolvedTheme === 'dark' ? (
      <Moon className="w-4 h-4 text-accent" />
    ) : (
      <Sun className="w-4 h-4 text-amber-500" />
    );
  };

  return (
    <Button
      variant="ghost"
      size={showLabel ? 'sm' : 'icon'}
      onClick={cycleTheme}
      className={cn('relative transition-transform duration-200 active:scale-95', className)}
      aria-label={`Current theme: ${theme}. Click to change theme.`}
      title={`Theme: ${theme}`}
    >
      {renderIcon()}
      {showLabel && (
        <span className="capitalize text-xs font-medium text-text-secondary">
          {theme}
        </span>
      )}
    </Button>
  );
};
