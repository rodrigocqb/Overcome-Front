import { useState } from "react";
import { searchExercises } from "services/exerciseServices";
import styled from "styled-components";
import { Exercise } from "types/exerciseTypes";
import { SheetExerciseBody } from "types/sheetTypes";

type SearchBarParams = {
  setExerciseData: React.Dispatch<
    React.SetStateAction<
      | (SheetExerciseBody & {
          name: string;
        })
      | null
    >
  >;
};

export default function Searchbar({ setExerciseData }: SearchBarParams) {
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
    <SearchContainer>
      <SearchInput
        placeholder="buscar exercício"
        type="text"
        value={searchParam}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value);
        }}
      />
      {exerciseList?.length > 0 && (
        <SearchResults>
          {exerciseList.map((value) => (
            <Result
              key={value.id}
              onClick={() => {
                setExerciseData({
                  exerciseId: value.id,
                  weight: 0,
                  reps: 0,
                  sets: 0,
                  name: value.name,
                });
                setSearchParam(() => "");
                setExerciseList(() => []);
              }}
            >
              {value.name}
            </Result>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
}

const SearchInput = styled.input`
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

const SearchContainer = styled.div`
  margin-top: 23px;
  width: 286px;
  height: 45px;
  border-radius: 23.5px;
  position: relative;
`;

const SearchResults = styled.div`
  width: 245px;
  min-height: 47px;
  max-height: 141px;
  background: #ffffff;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 45px;
  left: 20.5px;
  z-index: 3;
`;

const Result = styled.div`
  width: 100%;
  height: 45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 14px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  color: #6d6d6d;
  border-bottom: 1px solid #f2f2f2;
`;
