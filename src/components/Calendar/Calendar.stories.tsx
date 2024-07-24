import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './index';
import { DateProvider } from '../../providers/DateProviders';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    type: { control: 'select', options: ['Month', 'Week'] },
    isMondayFirst: { control: 'boolean' },
    isWeekendDate: { action: 'isWeekendDate' },
    isWithRange: { control: 'boolean' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    isTodosEnabled: { control: 'boolean' },
    isHolidayDate: { action: 'isHolidayDate' },
  },
} as Meta<typeof Calendar>;

type Story = StoryObj<CalendarProps>;

const Template: Story = {
  render: (args) => (
    <DateProvider>
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
