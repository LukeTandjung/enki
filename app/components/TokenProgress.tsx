import { Progress } from "@base-ui-components/react/progress";
import { responsiveTextFull, responsiveRounded } from "utils";

interface TokenProgressProps {
  label: string;
  current: number;
  max: number;
  period?: string;
}

export function TokenProgress({
  label,
  current,
  max,
  period = "this month",
}: TokenProgressProps) {
  const percentage = (current / max) * 100;

  return (
    <Progress.Root
      value={current}
      max={max}
      className="grid grid-cols-2 gap-x-1 sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 gap-y-2 sm:gap-y-2.5 md:gap-y-3 lg:gap-y-3.5 h-10.5"
    >
      <Progress.Label className={`[grid-area:1/1] flex items-start font-normal ${responsiveTextFull("sm")} text-text`}>
        {label}
      </Progress.Label>

      <Progress.Value className={`[grid-area:1/2] flex items-start justify-end font-normal ${responsiveTextFull("sm")} text-text`}>
        {() => `${current}/${max} (${period})`}
      </Progress.Value>

      <Progress.Track className={`[grid-area:2/1/auto/span_2] bg-border-unfocus flex ${responsiveRounded("sm")} h-1`}>
        <Progress.Indicator
          className={`bg-border-focus h-1 ${responsiveRounded("sm")}`}
          style={{ width: `${percentage}%` }}
        />
      </Progress.Track>
    </Progress.Root>
  );
}
