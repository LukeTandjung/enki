import { Progress } from '@base-ui-components/react/progress';
import { UserIcon } from '@heroicons/react/16/solid';

export default function PersonalTokens() {
  const currentTokens = 45;
  const maxTokens = 100;
  const percentage = (currentTokens / maxTokens) * 100;

  return (
    <div className="bg-background-alt flex flex-col gap-2 p-3 rounded-sm w-full">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center font-medium text-sm leading-5 text-text">
          <UserIcon className="size-4" />
          Personal Tokens
        </div>
        <div className="flex w-full font-light text-xxs text-text-alt">
          Rebuild any MCP frontend with personal tokens.
        </div>
      </div>

      <Progress.Root value={currentTokens} max={maxTokens} className="grid grid-cols-2 grid-rows-2 gap-1 h-[42px]">
        <Progress.Label className="[grid-area:1_/_1] flex items-start font-normal text-xs leading-4 text-text">
          Rebuild Tokens
        </Progress.Label>

        <Progress.Value className="[grid-area:1_/_2] flex items-start justify-end font-normal text-xs leading-4 text-text">
          {currentTokens}/{maxTokens} (this month)
        </Progress.Value>

        <Progress.Track className="[grid-area:2_/_1_/_auto_/_span_2] bg-border-unfocus flex rounded-xs">
          <Progress.Indicator
            className="bg-border-focus h-1 rounded-xs"
            style={{ width: `${percentage}%` }}
          />
        </Progress.Track>
      </Progress.Root>

      <button className="bg-background-select px-2 py-0.5 rounded-sm font-medium text-xs leading-4 text-text">
        Buy tokens
      </button>
    </div>
  );
}
