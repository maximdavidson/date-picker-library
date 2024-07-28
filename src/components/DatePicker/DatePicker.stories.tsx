import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';
import { WithGlobalStyles } from '../../../.storybook/WithGlobalStyles';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const WithHolidays: Story = {
  render: (args) => (
    <WithGlobalStyles>
      <DatePicker {...args} withHolidays={true} />
    </WithGlobalStyles>
  ),
};

export const WithoutHolidays: Story = {
  render: (args) => (
    <WithGlobalStyles>
      <DatePicker {...args} withHolidays={false} />
    </WithGlobalStyles>
  ),
};
