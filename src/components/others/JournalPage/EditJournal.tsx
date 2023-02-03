import { useState } from "react";
import { TextAreaWrapper } from "../Journals/JournalForm";

export default function EditJournal({
  newText,
  setNewText,
}: {
  newText: string;
  setNewText: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleChange(value: string) {
    setNewText(value);
  }

  return (
    <TextAreaWrapper
      name="text"
      value={newText}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        handleChange(e.target.value)
      }
    />
  );
}
