import React from 'react';

import Wrapper from './styled/Wrapper';

export interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...rest }: Props) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};

export default ({ element }: any) => <Layout>{element}</Layout>;
