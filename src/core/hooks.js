import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAddTodo, getDeleteTodo, getTodos } from "./api";
import { toast } from "react-toastify";



const errStyles = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
}


export const useAddTodo  = () => {

    const { data, ...rest } = useQuery(
        {
            queryKey: ['Todos'],
            queryFn: getTodos,
        },
    )

    return ({ data, ...rest })

}


export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
    {
        mutationFn: getAddTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Todos"] })
            toast.success('New task added successfully', { /* ...toast options */ });
        },
        onError: err => toast.error(err?.response?.data?.message || err?.message, { ...errStyles })
    });
}



export const useDeleteTodo = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => getDeleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries( { queryKey : ["Todos"]})
            toast.success('Task deleted successfully',  { ...errStyles } );
        }
    })
};

