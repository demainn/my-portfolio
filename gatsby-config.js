module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.igormichalak.com/',
		title: 'Igor Michalak | Web Developer',
		author: 'Igor Michalak',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-root-import',
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				jsxPragma: `jsx`,
				allExtensions: true,
			},
		},
	],
};
