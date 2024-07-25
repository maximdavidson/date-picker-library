import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './index';
import { DateProvider } from 'providers/DateProviders';
import { GlobalStyle } from '../../globalStyles';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    type: { control: 'select', options: ['Month', 'Week'] },
    isMondayFirst: { control: 'boolean' },
    isWeekendDate: { action: 'isWeekendDate' },
    isHolidayDate: { action: 'isHolidayDate' },
  },
} as Meta<typeof Calendar>;

type Story = StoryObj<CalendarProps>;

const Template: Story = {
  render: (args) => (
    <DateProvider>
      <GlobalStyle />
      <Calendar {...args} />
    </DateProvider>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    isMondayFirst: true,
  },
};
