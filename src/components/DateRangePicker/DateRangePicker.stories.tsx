import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from 'components/DateRangePicker';
import { withMondayFirst } from 'decorators/withMondayFirst';
import { withSundayFirst } from 'decorators/withSundayFirst';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const MondayFirst: Story = {
  render: (args) => withMondayFirst(DateRangePicker)(args),
};

export const SundayFirst: Story = {
  render: (args) => withSundayFirst(DateRangePicker)(args),
};
