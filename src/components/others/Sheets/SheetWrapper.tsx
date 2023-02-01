import dayjs from "dayjs";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { deleteSheet } from "services/sheetServices";
import styled from "styled-components";
import Swal from "sweetalert2";
import { SheetWithExercises } from "types/sheetTypes";

type SheetWrapperParams = {
  id: number;
  title: string;
  createdAt: Date;
  queryClient: QueryClient;
};

export default function SheetWrapper({
  id,
  title,
  createdAt,
  queryClient,
}: SheetWrapperParams) {
  const deleteSheetMutation = useMutation(() => deleteSheet(id), {
    onSuccess: () => {
      queryClient.setQueryData("sheets", newData);
    },
  });

  const newData = filterQueryData();

  function filterQueryData() {
    const data: SheetWithExercises[] | undefined =
      queryClient.getQueryData("sheets");
    return data?.filter((value) => value.id !== id);
  }

  async function handleDelete() {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não pode reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, quero apagar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.loading("Enviando dados", { toastId: "loading" });

        try {
          await deleteSheetMutation.mutateAsync();
          toast.dismiss("loading");
          toast.success("Ficha deletada com sucesso!");
        }
        catch (error) {
          toast.dismiss("loading");
          toast.error("Houve um erro ao tentar apagar a ficha!");
        }
      }
    });
  }

  return (
    <Wrapper>
      <SheetTitle>{title}</SheetTitle>
      <SheetDate>
        <p>{dayjs(createdAt).format("DD/MM/YY")}</p>
      </SheetDate>
      <DeleteButton onClick={handleDelete}>X</DeleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 280px;
  height: 52px;
  background-color: rgba(172, 164, 153, 0.66);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 15px 17px 6px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const SheetTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  max-width: 211px;
  text-overflow: ellipsis;
`;

const SheetDate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-weight: 400;
  font-size: 10px;
  color: #ffffff;
`;

const DeleteButton = styled.div`
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  top: 16px;
  right: 17px;
`;
