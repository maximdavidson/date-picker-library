import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Text } from './styled';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
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
