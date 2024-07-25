import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = { alias: {} };
    } else if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    // Настройка алиасов
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      decorators: path.resolve(__dirname, '../src/decorators'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      providers: path.resolve(__dirname, '../src/providers'),
      utils: path.resolve(__dirname, '../src/utils'),
      constants: path.resolve(__dirname, '../src/constants'),
    };

    return config;
  },
};

export default config;
