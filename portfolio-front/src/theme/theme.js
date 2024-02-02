const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#f8f9fa",
    text: "#343a40",
    success: "#28a745",
    error: "#dc3545",
    dark: "#16161a",
    white: "#e4e5f1",
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    baseFontSize: "16px",
    heading: {
      fontSize: "1.5rem", // 24px
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1rem", // 16px
      lineHeight: "1.5",
    },
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    duration: "0.3s",
    easing: "ease-in-out",
  },
};

export default theme;
