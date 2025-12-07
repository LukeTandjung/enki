import { useState } from "react";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { TokenProgress } from "./TokenProgress";
import { McpFormDialog } from "./McpFormDialog";
import { RemoveMcpDialog } from "./RemoveMcpDialog";

interface McpCollapsibleItemProps {
  name: string;
  status: "connected" | "disconnected";
  endpoint: string;
  tokens: {
    current: number;
    max: number;
  };
}

export function McpCollapsibleItem({
  name,
  status,
  endpoint,
  tokens,
}: McpCollapsibleItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      className="border border-border-unfocus border-solid flex flex-col gap-2.5 p-3.5 rounded-lg w-full"
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger
        className="flex items-center justify-between w-full font-medium text-lg leading-7 text-text"
      >
        <span>{name}</span>
        {open ? (
          <ChevronDownIcon className="size-6" />
        ) : (
          <ChevronRightIcon className="size-6" />
        )}
      </Collapsible.Trigger>

      <Collapsible.Panel
        className="flex flex-col gap-6 w-full"
      >
        {/* Status and Endpoint */}
        <div className="flex flex-col gap-2.5">
          <div
            className="flex gap-2.5 items-center font-normal text-base leading-7 text-text-alt"
          >
            Status:
            <div
              className={`${
                status === "connected" ? "bg-ok" : "bg-error"
              } px-2.5 rounded-lg font-normal text-base leading-7 text-text`}
            >
              {status}
            </div>
          </div>

          <div
            className="flex gap-2.5 items-center font-normal text-base leading-7 text-text-alt"
          >
            Endpoint: {endpoint}
          </div>
        </div>

        {/* Developer Tokens Progress */}
        <TokenProgress
          label="Developer Tokens"
          current={tokens.current}
          max={tokens.max}
          period="this month"
        />

        {/* Button Group */}
        <div
          className="flex gap-7 w-full mt-5"
        >
          <McpFormDialog
            trigger="Edit"
            title="Edit MCP"
            description="Edit the MCP configuration."
          />
          <RemoveMcpDialog trigger="Remove" mcpName={name} />
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
