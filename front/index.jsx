import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatPage from './ChatPage';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ChatPage />);
