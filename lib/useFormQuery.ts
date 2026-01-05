import { useMutation } from "@tanstack/react-query";
import { sendFormData } from "@/actions/contactAction";
import { toast } from "react-toastify";


export default function useFormQuery() {
    return useMutation({
        mutationFn: sendFormData,
        onSuccess: () => toast.success("Correo Enviado"),
        onError: () => toast.error("Hubo un error")
    });
}