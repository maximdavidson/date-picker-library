import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './index';
import { CalendarProps } from './types';
import { DateProvider } from 'context/DateProviders';
import { WithGlobalStyles } from '../../../.storybook/WithGlobalStyles';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    isMondayFirst: { control: 'boolean' },
    isWeekendDate: { action: 'isWeekendDate' },
    isHolidayDate: { action: 'isHolidayDate' },
    weekendColor: { control: 'color' },
    holidayColor: { control: 'color' },
  },
} as Meta<typeof Calendar>;

type Story = StoryObj<CalendarProps>;

const Template: Story = {
  render: (args) => (
    <DateProvider>
      <WithGlobalStyles />
      <Calendar {...args} />
    </DateProvider>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    isMondayFirst: true,
    weekendColor: 'rgba(255, 0, 0, 1)',
    holidayColor: 'rgba(255, 0, 0, 1)',
  },
};
