import { Progress } from '@base-ui-components/react/progress';

interface TokenProgressProps {
  label: string;
  current: number;
  max: number;
  period?: string;
}

export default function TokenProgress({
  label,
  current,
  max,
  period = 'this month'
}: TokenProgressProps) {
  const percentage = (current / max) * 100;

  return (
    <Progress.Root value={current} max={max} className="grid grid-cols-2 grid-rows-2 gap-1 h-[42px]">
      <Progress.Label className="[grid-area:1_/_1] flex items-start font-normal text-xs leading-4 text-text">
        {label}
      </Progress.Label>

      <Progress.Value className="[grid-area:1_/_2] flex items-start justify-end font-normal text-xs leading-4 text-text">
        {current}/{max} ({period})
      </Progress.Value>

      <Progress.Track className="[grid-area:2_/_1_/_auto_/_span_2] bg-border-unfocus flex rounded-xs">
        <Progress.Indicator
          className="bg-border-focus h-1 rounded-xs"
          style={{ width: `${percentage}%` }}
        />
      </Progress.Track>
    </Progress.Root>
  );
}
