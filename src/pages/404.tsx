import React from 'react';
import { Link } from 'gatsby';

export interface Props {}

const NotFoundPage: React.FC<Props> = ({ ...rest }: Props) => {
	return (
		<main {...rest}>
			<title>Not found</title>
			<h1>Page not found</h1>
			<Link to="/">Go home</Link>.
		</main>
	);
};

export default NotFoundPage;
