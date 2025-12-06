import type { Route } from "./+types/home";
import { useState } from "react";
import { Separator } from "@base-ui-components/react/separator";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { Button } from "@base-ui-components/react/button";
import {
  UserIcon,
  RectangleStackIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import { SectionCard, TokenProgress, MenuBar, McpFormDialog } from "components";
import {
  responsivePadding,
  responsiveRounded,
  responsiveTextFull,
  responsiveGap,
  responsiveIconSize,
  responsiveP,
  responsivePx,
} from "utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enki Home" },
    {
      name: "This is where you manage your tokens and MCPs",
      content: "Welcome to Enki!",
    },
  ];
}

export default function Home() {
  const mcps = [
    {
      name: "Notion",
      status: "connected",
      endpoint: "notion.api.mcp.com",
      tokens: { current: 20, max: 30 },
    },
    {
      name: "Gmail",
      status: "disconnected",
      endpoint: "gmail.api.mcp.com",
      tokens: { current: 15, max: 30 },
    },
  ];
  return (
    <div className="bg-background flex flex-col h-screen w-full">
      <div className="h-[100px] sm:h-[140px] md:h-[180px] lg:h-[260px] xl:h-[300px] relative w-full flex-shrink-0">
        <img
          src="/assets/banner.png"
          alt="Banner"
          className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full"
        />
      </div>

      <div
        className={`flex flex-col ${responsiveGap("base")} grow min-h-0 ${responsiveP("base")} w-full`}
      >
        <MenuBar />

        <Separator className="w-full bg-border-unfocus h-0.5" />

        <div
          className={`flex flex-col sm:flex-row ${responsiveGap("base")} grow min-h-0 w-full`}
        >
          {/* Personal Tokens Section */}
          <SectionCard
            icon={<UserIcon className={responsiveIconSize("sm")} />}
            title="Personal Tokens"
            description="Rebuild any MCP frontend with personal tokens."
            className="grow min-h-0"
          >
            <TokenProgress label="Rebuild Tokens" current={45} max={100} />

            <Button
              className={`sm:mt-auto bg-background-select ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text w-fit`}
            >
              Buy tokens
            </Button>
          </SectionCard>

          {/* Active MCPs Section */}
          <SectionCard
            icon={<RectangleStackIcon className={responsiveIconSize("sm")} />}
            title="Active MCPs"
            description="Manage your active MCPs here."
            className="grow min-h-0"
          >
            <ScrollArea.Root className="flex sm:grow min-h-0 w-full">
              <ScrollArea.Viewport className="flex grow min-h-0">
                <div
                  className={`flex flex-col ${responsiveGap("sm")} grow min-h-0`}
                >
                  {mcps.map((mcp) => {
                    const [open, setOpen] = useState(false);
                    return (
                      <Collapsible.Root
                        key={mcp.name}
                        className={`border border-border-unfocus border-solid flex flex-col ${responsiveGap("xs")} ${responsiveP("sm")} ${responsiveRounded("base")} w-full`}
                        open={open}
                        onOpenChange={setOpen}
                      >
                        <Collapsible.Trigger
                          className={`flex items-center justify-between w-full font-medium ${responsiveTextFull("sm")} text-text`}
                        >
                          <span>{mcp.name}</span>
                          {open ? (
                            <ChevronDownIcon
                              className={responsiveIconSize("xs")}
                            />
                          ) : (
                            <ChevronRightIcon
                              className={responsiveIconSize("xs")}
                            />
                          )}
                        </Collapsible.Trigger>

                        <Collapsible.Panel
                          className={`flex flex-col ${responsiveGap("base")} w-full`}
                        >
                          {/* Status and Endpoint */}
                          <div
                            className={`flex flex-col ${responsiveGap("xs")}`}
                          >
                            <div
                              className={`flex ${responsiveGap("xs")} items-center`}
                            >
                              <p
                                className={`font-normal ${responsiveTextFull("xs")} text-text-alt`}
                              >
                                Status:
                              </p>
                              <div
                                className={`${
                                  mcp.status === "connected"
                                    ? "bg-ok"
                                    : "bg-error"
                                } ${responsivePx("xs")} ${responsiveRounded("base")}`}
                              >
                                <p
                                  className={`font-normal ${responsiveTextFull("xs")} text-text`}
                                >
                                  {mcp.status}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`flex ${responsiveGap("xs")} items-center font-normal ${responsiveTextFull("xs")} text-text-alt`}
                            >
                              <p>Endpoint:</p>
                              <p>{mcp.endpoint}</p>
                            </div>
                          </div>

                          {/* Developer Tokens Progress */}
                          <TokenProgress
                            label="Developer Tokens"
                            current={mcp.tokens.current}
                            max={mcp.tokens.max}
                            period="this month"
                          />

                          {/* Button Group */}
                          <div className={`flex ${responsiveGap("lg")} w-full`}>
                            <McpFormDialog trigger="Edit" />
                            <Button
                              className={`bg-error ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
                            >
                              Remove
                            </Button>
                          </div>
                        </Collapsible.Panel>
                      </Collapsible.Root>
                    );
                  })}
                </div>
              </ScrollArea.Viewport>
            </ScrollArea.Root>

            <McpFormDialog trigger="Add MCP" />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
