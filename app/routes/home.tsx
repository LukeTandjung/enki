import type { Route } from "./+types/home";
import type { Mcp } from "types";
import { Separator } from "@base-ui-components/react/separator";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { Button } from "@base-ui-components/react/button";
import { UserIcon, RectangleStackIcon } from "@heroicons/react/16/solid";
import {
  SectionCard,
  TokenProgress,
  MenuBar,
  McpFormDialog,
  McpCollapsibleItem,
} from "components";

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
  const mcps: Array<Mcp> = [
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
      <div className="h-[300px] relative w-full shrink-0">
        <img
          src="/assets/banner.png"
          alt="Banner"
          className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full"
        />
      </div>

      <div className="flex flex-col gap-6 grow min-h-0 p-6 w-full">
        <MenuBar />

        <Separator className="w-full bg-border-unfocus h-0.5" />

        <div className="flex flex-col md:flex-row gap-6 md:grow md:min-h-0 w-full">
          {/* Personal Tokens Section */}
          <SectionCard
            icon={<UserIcon className="size-7" />}
            title="Personal Tokens"
            description="Rebuild any MCP frontend with personal tokens."
            className="md:grow md:min-h-0"
          >
            <TokenProgress label="Rebuild Tokens" current={45} max={100} />

            <Button className="mt-auto bg-background-select px-3 py-2 rounded-lg font-medium text-lg leading-7 text-text w-fit">
              Buy tokens
            </Button>
          </SectionCard>

          {/* Active MCPs Section */}
          <SectionCard
            icon={<RectangleStackIcon className="size-7" />}
            title="Active MCPs"
            description="Manage your active MCPs here."
            className="md:grow md:min-h-0"
          >
            <ScrollArea.Root className="flex grow min-h-0 w-full">
              <ScrollArea.Viewport className="flex grow min-h-0">
                <div className="flex flex-col gap-3.5 grow min-h-0">
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
