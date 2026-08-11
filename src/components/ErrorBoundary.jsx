import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback" role="alert">
          <h1>No se pudo mostrar esta página.</h1>
          <p>Actualiza la página para volver a intentarlo.</p>
        </main>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
