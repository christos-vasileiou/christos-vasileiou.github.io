import { FiMoon, FiSun } from 'react-icons/fi';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';

/**
 * Renders a dark/light theme switch.
 *
 * The default theme is the dark one; the light one is the other entry in
 * `themeConfig.themes`.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element | null} The rendered theme switch component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const darkTheme = themeConfig.defaultTheme;
  const lightTheme = themeConfig.themes.find((item) => item !== darkTheme);

  if (!lightTheme) return null;

  const isLight = theme === lightTheme;

  const changeTheme = (selectedTheme: string) => {
    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-6 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : isLight
                ? 'Light'
                : 'Dark'}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({ widthCls: 'w-24', heightCls: 'h-8' })
          ) : (
            <label
              title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
              className="flex items-center gap-2 cursor-pointer text-base-content opacity-70"
            >
              <FiMoon className="w-5 h-5" aria-hidden="true" />
              <input
                type="checkbox"
                className="toggle toggle-primary"
                aria-label="Light theme"
                checked={isLight}
                onChange={(e) =>
                  changeTheme(e.target.checked ? lightTheme : darkTheme)
                }
              />
              <FiSun className="w-5 h-5" aria-hidden="true" />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
