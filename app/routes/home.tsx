import type { Route } from "./+types/home";
import { Separator } from "@base-ui-components/react/separator";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { Button } from "@base-ui-components/react/button";
import { UserIcon, RectangleStackIcon } from "@heroicons/react/16/solid";
import { SectionCard, TokenProgress, MenuBar, McpFormDialog, McpCollapsibleItem } from "components";
import { responsivePadding, responsiveRounded, responsiveTextFull, responsiveGap, responsiveIconSize, responsiveP } from "utils";

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
                <div className={`flex flex-col ${responsiveGap("sm")} grow min-h-0`}>
                  {mcps.map((mcp) => (
                    <McpCollapsibleItem
                      key={mcp.name}
                      name={mcp.name}
                      status={mcp.status}
                      endpoint={mcp.endpoint}
                      tokens={mcp.tokens}
                    />
                  ))}
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
