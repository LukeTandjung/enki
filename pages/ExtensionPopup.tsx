import { Separator } from '@base-ui-components/react/separator';
import { Collapsible } from '@base-ui-components/react/collapsible';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { UserIcon, RectangleStackIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { bannerImage } from 'assets';
import { SectionCard, TokenProgress, MenuBar } from 'components';

const mcps = ['Notion', 'Gmail'];

export default function ExtensionPopup() {
  return (
    <div className="bg-background flex flex-col size-full">
      <div className="h-[100px] relative w-full">
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full"
        />
      </div>

      <div className="flex flex-col gap-3 grow min-h-0 p-3 w-full">
        <MenuBar />

        <Separator className="w-full bg-border-unfocus" />

        <div className="flex flex-col gap-[10px] grow min-h-0 w-full">
          {/* Personal Tokens Section */}
          <SectionCard
            icon={<UserIcon className="size-4" />}
            title="Personal Tokens"
            description="Rebuild any MCP frontend with personal tokens."
          >
            <TokenProgress
              label="Rebuild Tokens"
              current={45}
              max={100}
            />

            <button className="bg-background-select px-2 py-0.5 rounded-sm font-medium text-xs leading-4 text-text">
              Buy tokens
            </button>
          </SectionCard>

          {/* Active MCPs Section */}
          <SectionCard
            icon={<RectangleStackIcon className="size-4" />}
            title="Active MCPs"
            description="Manage your active MCPs here."
            className="grow min-h-0"
          >
            <ScrollArea.Root className="flex grow min-h-0 w-full">
              <ScrollArea.Viewport className="flex grow min-h-0">
                <div className="flex flex-col gap-2 grow min-h-0">
                  {mcps.map((mcp) => (
                    <Collapsible.Root key={mcp} className="border border-border-unfocus border-solid flex flex-col gap-1 justify-end p-2 rounded-sm w-full">
                      <Collapsible.Trigger className="flex items-center justify-between w-full font-medium text-xs leading-4 text-text">
                        {mcp}
                        <ChevronRightIcon className="size-3" />
                      </Collapsible.Trigger>
                    </Collapsible.Root>
                  ))}
                </div>
              </ScrollArea.Viewport>
            </ScrollArea.Root>

            <button className="bg-background-select px-2 py-0.5 rounded-sm font-medium text-xs leading-4 text-text">
              Add MCP
            </button>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
