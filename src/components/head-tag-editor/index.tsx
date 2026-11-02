import { Helmet } from 'react-helmet-async';
import { isDarkishTheme } from '../../utils';

type HeadTagEditorProps = {
  googleAnalyticsId?: string;
  appliedTheme: string;
};

/**
 * Renders the head tag editor component.
 *
 * The Google Analytics tag itself is added to the static index.html at build time
 * (see seo-plugin.ts), so it is not injected here a second time.
 *
 * @param {HeadTagEditorProps} appliedTheme - The applied theme.
 * @return {React.ReactElement} The head tag editor component.
 */
const HeadTagEditor: React.FC<HeadTagEditorProps> = ({ appliedTheme }) => {
  return (
    <Helmet>
      <meta
        name="theme-color"
        content={isDarkishTheme(appliedTheme) ? '#000000' : '#ffffff'}
      />
    </Helmet>
  );
};

export default HeadTagEditor;
