import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from 'components/DateRangePicker';
import { withMondayFirst } from 'decorators/withMondayFirst';
import { withSundayFirst } from 'decorators/withSundayFirst';
import { WithGlobalStyles } from '../../../.storybook/WithGlobalStyles';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const MondayFirst: Story = {
  render: (args) => (
    <WithGlobalStyles>
      {withMondayFirst(DateRangePicker)(args)}
    </WithGlobalStyles>
  ),
};

export const SundayFirst: Story = {
  render: (args) => (
    <WithGlobalStyles>
      {withSundayFirst(DateRangePicker)(args)}
    </WithGlobalStyles>
  ),
};
