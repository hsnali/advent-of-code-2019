module.exports = function(plop) {
  const path = require('path');

  plop.setGenerator('puzzle', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'day',
        message: 'What number day?'
      },
      {
        type: 'input',
        name: 'input',
        message: 'Any sample input?'
      }
    ],
    actions: function(data) {
      const templateDir = `${path.resolve(__dirname, 'templates')}`;
      const actions = [
        {
          type: 'add',
          path: 'src/day-{{day}}/index.ts'
        },
        {
          type: 'add',
          path: 'src/day-{{day}}/main.ts'
        },
        {
          type: 'add',
          path: 'src/day-{{day}}/__tests__/main.test.ts',
          templateFile: `${templateDir}/__tests__/name.test.ts.hbs`
        },
        {
          type: 'modify',
          pattern: /(\/\/end)/g,
          path: 'src/index.ts',
          template: `import './day-{{day}}/';\r\n$1`
        }
      ];

      if (data.input) {
        actions.push({
          type: 'add',
          path: 'src/day-{{day}}/input.ts',
          templateFile: `${templateDir}/input.ts.hbs`
        });
      }

      return actions;
    }
  });
};
