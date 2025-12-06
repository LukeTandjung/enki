import { useState } from "react";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { TokenProgress } from "./TokenProgress";
import { McpFormDialog } from "./McpFormDialog";
import { RemoveMcpDialog } from "./RemoveMcpDialog";
import { responsiveGap, responsiveP, responsiveRounded, responsiveTextFull, responsiveIconSize, responsivePx } from "utils";

interface McpCollapsibleItemProps {
  name: string;
  status: "connected" | "disconnected";
  endpoint: string;
  tokens: {
    current: number;
    max: number;
  };
}

export function McpCollapsibleItem({ name, status, endpoint, tokens }: McpCollapsibleItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      className={`border border-border-unfocus border-solid flex flex-col ${responsiveGap("xs")} ${responsiveP("sm")} ${responsiveRounded("base")} w-full`}
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger
        className={`flex items-center justify-between w-full font-medium ${responsiveTextFull("sm")} text-text`}
      >
        <span>{name}</span>
        {open ? (
          <ChevronDownIcon className={responsiveIconSize("xs")} />
        ) : (
          <ChevronRightIcon className={responsiveIconSize("xs")} />
        )}
      </Collapsible.Trigger>

      <Collapsible.Panel className={`flex flex-col ${responsiveGap("base")} w-full`}>
        {/* Status and Endpoint */}
        <div className={`flex flex-col ${responsiveGap("xs")}`}>
          <div className={`flex ${responsiveGap("xs")} items-center`}>
            <p className={`font-normal ${responsiveTextFull("xs")} text-text-alt`}>
              Status:
            </p>
            <div
              className={`${
                status === "connected" ? "bg-ok" : "bg-error"
              } ${responsivePx("xs")} ${responsiveRounded("base")}`}
            >
              <p className={`font-normal ${responsiveTextFull("xs")} text-text`}>
                {status}
              </p>
            </div>
          </div>

          <div className={`flex ${responsiveGap("xs")} items-center font-normal ${responsiveTextFull("xs")} text-text-alt`}>
            <p>Endpoint:</p>
            <p>{endpoint}</p>
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
        <div className={`flex ${responsiveGap("lg")} w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5`}>
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
