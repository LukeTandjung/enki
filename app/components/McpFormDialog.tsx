import { Dialog } from "@base-ui-components/react/dialog";
import { FormField } from "./FormField";
import type { ReactNode } from "react";
import {
  responsivePadding,
  responsiveRounded,
  responsiveTextFull,
  responsiveGap,
  responsiveP,
  responsivePy,
} from "utils";

interface McpFormDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

export function McpFormDialog({ trigger, title = "Add MCP", description = "Add the MCP you want to create a frontend for." }: McpFormDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={`bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text w-fit`}
      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <Dialog.Popup
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-alt ${responsiveRounded("base")} ${responsiveP("base")} flex flex-col ${responsiveGap("sm")} max-w-md w-full`}
        >
          <Dialog.Title
            className={`font-medium ${responsiveTextFull("base")} text-text`}
          >
            {title}
          </Dialog.Title>

          <Dialog.Description
            className={`font-light ${responsiveTextFull("xs")} text-text-alt`}
          >
            {description}
          </Dialog.Description>

          <div
            className={`flex flex-col ${responsiveGap("sm")} ${responsivePy("base")}`}
          >
            <FormField name="name" label="Name" placeholder="Enter a name" />

            <FormField
              name="endpoint"
              label="Endpoint"
              placeholder="Enter a URL"
            />

            <FormField
              name="instructions"
              label="Instructions"
              description="Write your MCP-specific instructions here!"
              placeholder="Enter instructions"
              multiline
            />
          </div>

          <div className={`flex ${responsiveGap("sm")} w-full`}>
            <Dialog.Close
              className={`bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
            >
              Test MCP
            </Dialog.Close>

            <Dialog.Close
              className={`bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
            >
              Create MCP
            </Dialog.Close>

            <Dialog.Close
              className={`bg-error ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
            >
              Cancel
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
