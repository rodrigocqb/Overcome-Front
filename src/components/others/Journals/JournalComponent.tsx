import { QueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteJournal } from "services/journalServices";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Journal } from "types/journalTypes";

type JournalComponentParams = {
  id: number;
  date: string;
  text: string;
  queryClient: QueryClient;
};

export default function JournalComponent({
  id,
  date,
  text,
  queryClient,
}: JournalComponentParams) {
  const deleteJournalMutation = useMutation(() => deleteJournal(id), {
    onSuccess: () => {
      queryClient.setQueryData("journals", newData);
    },
  });

  const newData = filterQueryData();

  function filterQueryData() {
    const data: Journal[] | undefined = queryClient.getQueryData("journals");
    return data?.filter((value) => value.id !== id);
  }

  async function handleDelete() {
    Swal.fire({
      title: "Tem certeza?",
      text: `Você realmente quer apagar o diário do dia ${date}?`,
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
          await deleteJournalMutation.mutateAsync();
          toast.dismiss("loading");
          toast.success("Diário deletada com sucesso!");
        }
        catch (error) {
          toast.dismiss("loading");
          toast.error("Houve um erro ao tentar apagar o diário!");
        }
      }
    });
  }

  const navigate = useNavigate();

  function readJournal() {
    navigate(`/journals/${id}`, { state: { data: { id, date, text } } });
  }

  return (
    <Wrapper>
      <p onClick={readJournal}>{date}</p>
      <span onClick={handleDelete}>x</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 186px;
  height: 52px;
  background-color: #f1f1f1;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 0 11px 0 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #757575;

  span {
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
