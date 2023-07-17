const theme = Object.freeze({
  colors: {
    primary: '#F8F9FA',
    secondary: '#718096',
    primaryBg: '#1B365C12',
    secondaryBg: '#E2E8F0',
    primaryText: '#2D3748',
    secondaryText: '#87AED4',
    accent: '#1B365C',
    inputBorder: '#e2e8f0',
    iconBtn: '#E53E3E',
    errorText: '#E53E3E',
  },
  boxShadow: `4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16)`,
  duration: '250ms',
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  breakpoint: '680px',
});

Object.freeze(theme.colors);

export { theme };
