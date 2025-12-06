import { Avatar } from "@base-ui-components/react/avatar";
import { Button } from "@base-ui-components/react/button";
import { Separator } from "@base-ui-components/react/separator";
import {
  responsivePadding,
  responsiveRounded,
  responsiveTextFull,
  responsiveGap,
} from "utils";

export function MenuBar() {
  return (
    <div className="flex items-center justify-between w-full">
      <Avatar.Root className="size-9 sm:size-11 md:size-12 lg:size-14">
        <Avatar.Image
          src="./favicon.ico"
          alt="User avatar"
          className="size-full"
        />
      </Avatar.Root>

      <div className={`flex items-center ${responsiveGap("base")}`}>
        <Button
          className={`bg-background-select flex ${responsiveGap("xs")} items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-border-focus`}
        >
          Style
        </Button>

        <Button
          className={`flex items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
        >
          Settings
        </Button>

        <Separator
          orientation="vertical"
          className="h-[11px] sm:h-[13px] md:h-[15px] lg:h-[17px] w-0.5 bg-border-unfocus"
        />

        <Button
          className={`flex items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
        >
          Help
        </Button>
      </div>
    </div>
  );
}
