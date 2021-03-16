module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home'
    },
    {
      type: 'doc',
      id: 'installation'
    },
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: false,
      items: [
	'quick-start/overview',
	'quick-start/compile',
	'quick-start/webpage',
	'quick-start/run',
	'quick-start/assets',
	'quick-start/wrapup',
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items: [
	'examples/summary',
	'examples/minimal',
	'examples/basic',
	'examples/multi-targets',
	'examples/multi-tracks',
	'examples/custom-ui',
	'examples/events-handling',
	'examples/interative',
      ]
    },
    {
      type: 'category',
      label: 'More Examples',
      collapsed: true,
      items: [
	'more-examples/react',
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: true,
      items: [
	'tools/compile'
      ]
    },
    /*
    {
      type: 'category',
      label: 'Default',
      collapsed: false,
      items: ['doc1', 'doc2', 'doc3', 'mdx']
    }
    */
  ],
};
