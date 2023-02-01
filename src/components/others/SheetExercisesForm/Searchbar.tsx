import { useState } from "react";
import { searchExercises } from "services/exerciseServices";
import styled from "styled-components";
import { Exercise } from "types/exerciseTypes";

export default function Searchbar() {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [searchParam, setSearchParam] = useState("");

  async function handleChange(value: string) {
    setSearchParam(value);
    if (value.length >= 3) {
      const result = await searchExercises(value);
      setExerciseList(result);
    }
    else {
      setExerciseList([]);
    }
  }

  return (
    <SearchInput
      placeholder="buscar exercício"
      type="text"
      value={searchParam}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value);
      }}
    />
  );
}

const SearchInput = styled.input`
  margin-top: 23px;
  width: 286px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.88);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23.5px;
  outline: none;
  border: 0px;
  padding-left: 35px;
  font-size: 15px;
  font-weight: 500;
  color: #6d6d6d;
  &::placeholder {
    color: #cecece;
  }
`;
