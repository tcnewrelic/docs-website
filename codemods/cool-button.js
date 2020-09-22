module.exports = ({ types: t }) => {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (t.isJSXIdentifier(path.node, { name: 'Button' })) {
          path.node.name = 'CoolButton';
        }
      },
    },
  };
};
