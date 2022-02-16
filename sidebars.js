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
      label: 'Image Tracking Quick Start',
      collapsed: true,
      items: [
	'quick-start/overview',
	'quick-start/compile',
	'quick-start/webpage',
	'quick-start/run',
	'quick-start/assets',
	'quick-start/wrapup',
	'quick-start/tracking-config',
      ]
    },
    {
      type: 'category',
      label: 'Image Tracking Examples',
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
      label: 'Face Tracking Quick Start',
      collapsed: true,
      items: [
	'face-tracking-quick-start/overview',
	'face-tracking-quick-start/webpage',
	'face-tracking-quick-start/run',
	'face-tracking-quick-start/assets',
	'face-tracking-quick-start/occluder',
	'face-tracking-quick-start/wrapup',
      ],
    },
    {
      type: 'category',
      label: 'Face Tracking Examples',
      collapsed: true,
      items: [
	'face-tracking-examples/summary',
	'face-tracking-examples/minimal',
	'face-tracking-examples/tryon',
	'face-tracking-examples/events-handling',
      ],
    },
    {
      type: 'category',
      label: 'More Examples',
      collapsed: true,
      items: [
	'more-examples/react',
	'more-examples/threejs-image',
	'more-examples/threejs-face',
      ]
    },
    /*
    {
      type: 'doc',
      id: 'core-api'
    },
    */
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
