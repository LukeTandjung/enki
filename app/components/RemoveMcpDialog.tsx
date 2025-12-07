import { AlertDialog } from "@base-ui-components/react/alert-dialog";
import type { ReactNode } from "react";

interface RemoveMcpDialogProps {
  trigger: ReactNode;
  mcpName: string;
  onConfirm?: () => void;
}

export function RemoveMcpDialog({ trigger, mcpName, onConfirm }: RemoveMcpDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="bg-error px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text">
        {trigger}
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-alt rounded-lg p-6 flex flex-col gap-3.5 max-w-md w-full">
          <AlertDialog.Title className="font-medium text-xl leading-8 text-text">
            Delete MCP?
          </AlertDialog.Title>

          <AlertDialog.Description className="font-light text-base leading-7 text-text-alt">
            You cannot undo this action.
          </AlertDialog.Description>

          <div className="flex gap-7 w-full">
            <AlertDialog.Close className="bg-background-select px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text">
              Cancel
            </AlertDialog.Close>

            <AlertDialog.Close
              className="bg-error px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text"
              onClick={onConfirm}
            >
              Delete
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
