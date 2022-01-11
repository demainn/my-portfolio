import React from 'react';

export interface Props {}

const IndexPage: React.FC<Props> = ({ ...rest }: Props) => {
	return (
		<main {...rest}>
			<title>Igor Michalak | Web Developer</title>
			<h1>Main page</h1>
		</main>
	);
};

export default IndexPage;
