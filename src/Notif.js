import React, { useState } from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';

export default function Notif(props) {
  const { addToast, removeToast } = useToasts();
  const [toasta, setToasta] = useState([]);
  const [triggerNotification0,setTriggerNotification0]=useState(new Date());

  const showToast = () => {
    const content = props.message;
    const toastId = addToast(content, {
      appearance: props.status,
      autoDismiss: true,
      autoDismissTimeout:props.autoDismissTimeout
    });

    setToasta((prevToasta) => {
      const newToasta = [...prevToasta, toastId];

      // Check if there are more than 4 toasts, then remove the oldest one
      if (newToasta.length > props.lengthscreen) {
        removeToast(newToasta.shift());
      }

      return newToasta;
    });
  };

  // Call the showToast function when triggerNotification is called
  React.useEffect(() => {
    if (props.triggerNotification) {
      showToast();
    }
  }, [props.triggerNotification]);

  // No need for a button within Notif

  return null; // Return null or any other desired component structure
}