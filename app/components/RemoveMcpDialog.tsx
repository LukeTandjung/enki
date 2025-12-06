import { AlertDialog } from "@base-ui-components/react/alert-dialog";
import { responsivePadding, responsiveRounded, responsiveTextFull, responsiveGap, responsiveP } from "utils";
import type { ReactNode } from "react";

interface RemoveMcpDialogProps {
  trigger: ReactNode;
  mcpName: string;
  onConfirm?: () => void;
}

export function RemoveMcpDialog({ trigger, mcpName, onConfirm }: RemoveMcpDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className={`bg-error ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}>
        {trigger}
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <AlertDialog.Popup className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-alt ${responsiveRounded("base")} ${responsiveP("base")} flex flex-col ${responsiveGap("sm")} max-w-md w-full`}>
          <AlertDialog.Title className={`font-medium ${responsiveTextFull("base")} text-text`}>
            Delete MCP?
          </AlertDialog.Title>

          <AlertDialog.Description className={`font-light ${responsiveTextFull("xs")} text-text-alt`}>
            You cannot undo this action.
          </AlertDialog.Description>

          <div className={`flex ${responsiveGap("lg")} w-full`}>
            <AlertDialog.Close className={`bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}>
              Cancel
            </AlertDialog.Close>

            <AlertDialog.Close
              className={`bg-error ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
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
