import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';
import { WithGlobalStyles } from '../../../.storybook/WithGlobalStyles';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    isMondayFirst: { control: 'boolean' },
    weekendColor: { control: 'color' },
    holidayColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const WithHolidays: Story = {
  args: {
    isMondayFirst: true,
    weekendColor: 'rgba(255, 0, 0, 1)',
    holidayColor: 'rgba(255, 0, 0, 1)',
  },

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
