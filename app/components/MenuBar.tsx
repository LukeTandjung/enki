import { Avatar } from "@base-ui-components/react/avatar";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
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

      <div className="flex items-stretch">
        <NavigationMenu.Root className="flex h-full">
          <NavigationMenu.List className={`flex h-full items-center justify-end ${responsiveGap("base")}`}>
            <NavigationMenu.Item className="flex items-center">
              <NavigationMenu.Trigger
                className={`bg-background-select flex items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-border-focus`}
              >
                Style
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="flex items-center">
              <NavigationMenu.Trigger
                className={`flex items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
              >
                Settings
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>

            <Separator
              orientation="vertical"
              className="h-[11px] sm:h-[13px] md:h-[15px] lg:h-[17px] w-0.5 bg-border-unfocus"
            />

            <NavigationMenu.Item className="flex items-center">
              <NavigationMenu.Trigger
                className={`flex items-center ${responsivePadding("sm")} ${responsiveRounded("base")} font-medium ${responsiveTextFull("sm")} text-text`}
              >
                Help
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
}
