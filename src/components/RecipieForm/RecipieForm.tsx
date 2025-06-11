"use client";

import Dropdown from "./Dropdown";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

export default function RecipieForm() {
  const [query, setQuery] = useState("");
  const [cuisine, setCousine] = useState("");
  const [maxReadyTime, setMaxReadyTime] = useState("");

  const isDisabled = !query && !cuisine && !maxReadyTime;

  function getQueryParams() {
    const queryParams = new URLSearchParams();

    if (query) {
      queryParams.append("query", query);
    }
    if (cuisine) {
      queryParams.append("cuisine", cuisine);
    }
    if (maxReadyTime) {
      queryParams.append("maxReadyTime", maxReadyTime);
    }

    return queryParams.toString();
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-96 text-3xl">
      <Input
        label={`Enter recipes (e.g., "pasta")`}
        placeholder="Enter recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Dropdown
        value={cuisine}
        onChange={(value) => {
          setCousine(value);
        }}
      />
      <Input
        type="number"
        label="Specify the maximum preparation time in minutes."
        placeholder="Enter time in minutes."
        value={maxReadyTime}
        onChange={(e) => setMaxReadyTime(e.target.value)}
      />
      <div className="flex justify-end w-full">
        <Button to={`/recipes?${getQueryParams()}`} disabled={isDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
}
