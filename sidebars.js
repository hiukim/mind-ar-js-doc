module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home'
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
      collapsed: false,
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
      label: 'Tools',
      collapsed: false,
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
