import { Field } from "@base-ui-components/react/field";
import type { ReactNode } from "react";
import {
  responsivePadding,
  responsiveRounded,
  responsiveTextFull,
  responsiveGap,
} from "utils";

interface FormFieldProps {
  label: string;
  placeholder: string;
  description?: string;
  multiline?: boolean;
  name: string;
}

export function FormField({
  label,
  placeholder,
  description,
  multiline = false,
  name,
}: FormFieldProps) {
  return (
    <Field.Root
      className={`flex flex-col ${responsiveGap("xs")} w-full`}
      name={name}
    >
      <Field.Label
        className={`font-normal ${responsiveTextFull("sm")} text-text`}
      >
        {label}
      </Field.Label>

      {description && (
        <Field.Description
          className={`font-light ${responsiveTextFull("xs")} text-text-alt`}
        >
          {description}
        </Field.Description>
      )}

      <Field.Control
        render={multiline ? <textarea rows={3} /> : <input />}
        placeholder={placeholder}
        className={`bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} ${responsiveTextFull("xs")} text-text-alt placeholder:text-text-alt w-full ${multiline ? "resize-none" : ""}`}
      />
    </Field.Root>
  );
}
