//具体配置可以查看 https://docusaurus.io/docs/api/docusaurus-config
import { themes as prismThemes } from "prism-react-renderer";

// /** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Kosmos", //网站标题
	tagline: "Flexible and scalable Kubernetes multi-cluster management, combined with efficient and precise cross-cluster resource scheduling, achieves maximum resource utilization.", //网站标语
	favicon: "img/favicon.ico", //你的网站图标的路径；必须是可以用于链接 href 的 URL

	// Set the production url of your site here
	url: "https://kosmos-io.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/website/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "kosmos", // Usually your GitHub org/user name.
	projectName: "website", // Usually your repo name.
	deploymentBranch: "main",
	trailingSlash: false,

	onBrokenLinks: "throw", //Docusaurus 在检测到无效链接时的行为
	onBrokenMarkdownLinks: "warn",

	//i18n配置相关
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	scripts: [], //一组要加载的脚本
	presets: [
		[
			"classic",
			// /** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
				},
			},
		],
	],
	plugins: ["docusaurus-tailwindcss-loader", "docusaurus-plugin-image-zoom"],
	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		//切换主题按钮关闭
		colorMode: {
			defaultMode: "light",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		navbar: {
			title: "Kosmos",
			logo: {
				alt: "Kosmos Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "right",
					label: "Documentation",
				},
				{ to: "/blog", label: "Examples", position: "right" },
				{
					href: "https://www.baidu.com",
					className: "header-github-link",
					"aria-label": "GitHub repository",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Documentation",
					items: [
						{
							label: "Getting Started",
							to: "/docs/intro",
						},
						{
							label: "Tutorials",
							to: "/docs/intro",
						},
						{
							label: "Core Concepts",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Community Address Name",
							href: "https://www.baidu.com",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://kosmos-io.github.io",
						},
					],
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["cue", "powershell"],
		},
		zoom: {
			selector: ".markdown :not(em) > img",
			config: {
				background: {
					light: "rgb(255, 255, 255)",
					dark: "rgb(50, 50, 50)",
				},
			},
		},
	},
};

export default config;
