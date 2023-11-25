import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { last_row_after_header } from './initials_inputs.js';
import { ToastProvider } from 'react-toast-notifications';


import { DefaultToast } from 'react-toast-notifications';
export const MyCustomToast = ({ children, ...props }) => (
    <DefaultToast {...props }>
        {children}
  </DefaultToast>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
{/* <ToastProvider components={{ Toast: MyCustomToast }}> */}
<ToastProvider
    placement="bottom-right"
    >
    <App/>
</ToastProvider>
</Provider>
);