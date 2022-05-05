import React from "react";

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error.message };
  }

  state: { hasError: boolean | null; message: string | null };

  constructor(props: any) {
    super(props);
    this.state = { hasError: null, message: null };
  }

  render() {
    const { hasError, message } = this.state;
    if (hasError) {
      if (message) {
        return <h1>{message}</h1>;
      }
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
