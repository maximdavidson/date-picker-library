import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

// Определение метаданных для компонента Button
export default {
  title: 'ReactComponentLibrary/Button', // Раздел и название компонента в Storybook
  component: Button, // Сам компонент
  parameters: {
    actions: {
      handles: ['click'], // Отслеживание событий клика
    },
  },
} as Meta<typeof Button>;

// Шаблон для создания историй компонента Button
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// История для состояния компонента с текстом "Hello world!"
export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!', // Аргументы для компонента
};

// История для состояния компонента с текстом "Click me!"
export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!', // Аргументы для компонента
};
