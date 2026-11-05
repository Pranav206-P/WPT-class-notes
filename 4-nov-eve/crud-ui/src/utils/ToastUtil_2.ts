
import { Bounce, toast, type ToastOptions } from "react-toastify";

const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}

export function showSuccessToast(message: string) {

    toast.success(message, toastConfig);

}

export function showErrorToast(message: string) {
    toast.error(message, toastConfig)
}