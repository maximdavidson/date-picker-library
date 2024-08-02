import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Text } from './styled';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Container>
            <Text>Something is wrong &#41;</Text>
            <Text>We'll fix it soon!</Text>
          </Container>
        )
      );
    }

    return this.props.children;
  }
}
