import { Collapsible } from '@base-ui-components/react/collapsible';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { RectangleStackIcon } from '@heroicons/react/16/solid';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

const mcps = ['Notion', 'Gmail'];

export default function ActiveMCPs() {
  return (
    <div className="bg-background-alt flex flex-col gap-2 grow min-h-0 p-3 rounded-sm w-full">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center font-medium text-sm leading-5 text-text">
          <RectangleStackIcon className="size-4" />
          Active MCPs
        </div>
        <div className="flex w-full font-light text-xxs text-text-alt">
          Manage your active MCPs here.
        </div>
      </div>

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
    </div>
  );
}
