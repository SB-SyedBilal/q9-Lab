import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const ProductSelect = ({ control, errors }) => {
  const options = [
    { value: "Ava - AI Voice Agent", label: "Ava - AI Voice Agent" },
    { value: "AI Recruiter", label: "AI Recruiter" },
    { value: "Ator - AI Tutor", label: "Ator - AI Tutor" },
    { value: "AI Shopping Assistant", label: "AI Shopping Assistant" },
    { value: "Custom AI Agent", label: "Custom AI Agent" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="relative md:col-span-2 w-full">
      <label
        htmlFor="product_interest"
        className="block mb-2 text-md font-medium text-white"
      >
        Which product are you interested in?
      </label>

      <Controller
        name="product_interest"
        control={control}
        defaultValue={[]} // ✅ important for react-hook-form
        rules={{ required: "Please select at least one product" }}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            isMulti
            placeholder="Select product(s)"
            className="text-black"
            classNamePrefix="react-select"
            // ✅ FIXED: convert object array → string array for form value
            onChange={(selected) =>
              field.onChange(selected ? selected.map((opt) => opt.value) : [])
            }
            // ✅ display correct selected values from string array
            value={options.filter((opt) =>
              field.value?.includes(opt.value)
            )}
            styles={{
              control: (base, state) => ({
                ...base,
                backgroundColor: "#222",
                border: "none",
                outline: "none",
                boxShadow: state.isFocused
                  ? "0 0 0 1px #22d3ee"
                  : "none",
                "&:hover": {
                  border: "none",
                },
                padding: "4px 6px",
                minHeight: "60px",
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: "#333",
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: "white",
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: "white",
                ":hover": { backgroundColor: "#22d3ee", color: "#000" },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#222",
                border: "none",
                boxShadow: "0 0 0 1px #22d3ee30",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#22d3ee" : "#222",
                color: isFocused ? "#000" : "#fff",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#aaa",
              }),
            }}
          />
        )}
      />

      {errors.product_interest && (
        <p className="mt-1 text-red-400 text-sm">
          {errors.product_interest.message}
        </p>
      )}
    </div>
  );
};

export default ProductSelect;
