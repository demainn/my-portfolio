import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'app/store';
import useThemeType from 'utils/hooks/useThemeType';
import lightTheme from 'utils/styled/lightTheme';
import darkTheme from 'utils/styled/darkTheme';
import GlobalStyle from 'utils/styled/GlobalStyle';

export interface Props {
	children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }: Props) => {
	return (
		<Provider store={store}>
			<SubProviders>{children}</SubProviders>
		</Provider>
	);
};

const SubProviders: React.FC<Props> = ({ children }: Props) => {
	const [theme] = useThemeType();
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};

export default ({ element }: any) => <Providers>{element}</Providers>;
