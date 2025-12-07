import { Dialog } from "@base-ui-components/react/dialog";
import { FormField } from "./FormField";
import type { ReactNode } from "react";

interface McpFormDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

export function McpFormDialog({ trigger, title = "Add MCP", description = "Add the MCP you want to create a frontend for." }: McpFormDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="bg-background-select px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text w-fit"
      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <Dialog.Popup
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-alt rounded-lg p-6 flex flex-col gap-3.5 max-w-md w-full"
        >
          <Dialog.Title
            className="font-medium text-xl leading-8 text-text"
          >
            {title}
          </Dialog.Title>

          <Dialog.Description
            className="font-light text-base leading-7 text-text-alt"
          >
            {description}
          </Dialog.Description>

          <div
            className="flex flex-col gap-3.5 py-2.5"
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

          <div className="flex gap-3.5 w-full">
            <Dialog.Close
              className="bg-background-select px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text"
            >
              Test MCP
            </Dialog.Close>

            <Dialog.Close
              className="bg-background-select px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text"
            >
              Create MCP
            </Dialog.Close>

            <Dialog.Close
              className="bg-error px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text"
            >
              Cancel
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
