import React from 'react';
import { render } from '@testing-library/react';

import App from '../components/App/App';

test('renders without errors', () => {
  render(<App />);
});
