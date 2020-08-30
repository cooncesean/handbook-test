module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'People',
      collapsed: false,
      items: [
        'people/introduction',
        'people/benefits',
        'people/communication',
        'people/compensation'
      ],
    },
    {
      type: 'category',
      label: 'Support',
      collapsed: false,
      items: [
        'support/how-to-handle-safe-reports',
      ],
    },
    {
      type: 'category',
      label: 'Engineering',
      collapsed: false,
      items: [
        'engineering/eng-introduction',
        {
            type: "category",
            label: "Technical Design Docs",
            items: [
              "engineering/technical-design-docs/index",
              "engineering/technical-design-docs/template",
            ]
        },
        'engineering/retrospectives',
        'engineering/product-requirements-template',
        'engineering/file-does-not-exist',
      ],
    },
    'contributing',
  ],
};