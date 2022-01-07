import { Component, ReactNode, ErrorInfo } from 'react';
import Link from 'next/link';

type ErrorBoundaryProps = {
  link: string;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    const { children, link } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <p>{`Something went wrong `}</p>
          <Link href={link}>
            <a style={{ textDecoration: 'underline' }}>Go back home</a>
          </Link>
        </div>
      );
    }
    return children;
  }
}
