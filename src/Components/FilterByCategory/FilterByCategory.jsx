"use client";
import { ListBox, Select } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterByCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div>
      <Select
        placeholder="Filter by Category"
        className={"flex-1"}
        onSelectionChange={(keys) => {
          let value;

          if (typeof keys === "string") {
            value = keys;
          } else {
            value = Array.from(keys)[0];
          }

          handleCategoryChange(value);
        }}
      >
        <Select.Trigger
          className={"border border-gray-200 rounded-md shadow-none "}
        >
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className={"rounded-md shadow-md"}>
          <ListBox>
            <ListBox.Item
              id="technology"
              textValue="Technology"
              className="hover:rounded-md"
            >
              Technology
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="e-commerce"
              textValue="E-commerce"
              className="hover:rounded-md"
            >
              E-commerce
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="education"
              textValue="Education"
              className="hover:rounded-md"
            >
              Education
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="health"
              textValue="Health"
              className="hover:rounded-md"
            >
              Health
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="finance"
              textValue="Finance"
              className="hover:rounded-md"
            >
              Finance
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default FilterByCategory;
