"use client";
import { Button, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/ideas?${params.toString()}`);
  };
  return (
    <div>
      <div className="flex justify-center gap-3 rounded-md bg-gray-200">
        <SearchField name="search" className={"w-62.5 md:w-72"}>
          <SearchField.Group className="rounded-md border shadow-none ">
            <SearchField.SearchIcon />
            <SearchField.Input
              placeholder="Search..."
              className={""}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Button onClick={handleSearch} className={"rounded-md bg-[#469165]"}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
