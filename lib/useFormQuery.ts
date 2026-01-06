import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { sendFormData } from "@/actions/contactAction";

export default function useFormQuery() {
    return useMutation({
        mutationFn: sendFormData,
        onSuccess: () => toast.success("Correo Enviado"),
        onError: () => toast.error("Hubo un error")
    });
}