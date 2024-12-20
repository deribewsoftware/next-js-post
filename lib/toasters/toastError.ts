
import { Bounce, toast } from 'react-toastify';

const ToastError= (message:string) => {
 toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  
}

export default ToastError