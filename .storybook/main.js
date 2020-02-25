module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register', // props를 변경할 수 있는 UI 컨트롤 제공
    '@storybook/addon-viewport/register', // phone, tablet, pc 해상도 테스트
    '@storybook/addon-docs/react/preset',
  ],
};

// storybook 공식문서 에 나와 있는 코드

// module.exports = {
//   stories: ["../src/**/*.stories.tsx"],
//   webpackFinal: async config => {
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       loader: require.resolve("babel-loader"),
//       options: {
//         presets: [["react-app", { flow: false, typescript: true }]]
//       }
//     });
//     config.resolve.extensions.push(".ts", ".tsx");
//     return config;
//   }
// };
