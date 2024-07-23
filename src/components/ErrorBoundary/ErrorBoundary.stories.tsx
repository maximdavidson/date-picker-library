import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from '../ErrorBoundary';
import { Container, Text } from './styled';

const FallbackComponent = () => (
  <Container>
    <Text>Something is wrong &#41;</Text>
    <Text>We'll fix it soon!</Text>
  </Container>
);

const RegularComponent = () => <h1>Hello, World!</h1>;

const ComponentWithError = () => {
  throw new Error('Test error');
};

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      description: {
        component:
          'A boundary component that catches JavaScript errors in child components and displays a fallback UI.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const Primary: Story = {
  render: () => (
    <ErrorBoundary fallback={<FallbackComponent />}>
      <RegularComponent />
    </ErrorBoundary>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary fallback={<FallbackComponent />}>
      <ComponentWithError />
    </ErrorBoundary>
  ),
};
