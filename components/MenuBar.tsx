import { Avatar } from '@base-ui-components/react/avatar';
import { NavigationMenu } from '@base-ui-components/react/navigation-menu';
import { Separator } from '@base-ui-components/react/separator';
import { avatarImage } from 'assets';

export default function MenuBar() {
  return (
    <div className="flex items-center justify-between w-full">
      <Avatar.Root className="size-9">
        <Avatar.Image src={avatarImage} alt="User avatar" className="size-full" />
      </Avatar.Root>

      <div className="flex items-stretch">
        <NavigationMenu.Root className="flex h-full w-[242px] max-w-96">
          <NavigationMenu.List className="flex grow h-full items-center justify-end gap-3 px-3">
            <NavigationMenu.Item className="flex items-center rounded-md">
              <NavigationMenu.Trigger className="bg-background-select flex gap-1 items-center px-2 py-0.5 rounded-md font-medium text-xs leading-4 text-border-focus">
                Style
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="flex items-center rounded-md">
              <NavigationMenu.Trigger className="flex items-center px-2 py-0.5 rounded-md font-medium text-xs leading-4 text-text">
                Settings
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>

            <Separator orientation="vertical" className="h-[11px] w-0.5 bg-border-unfocus" />

            <NavigationMenu.Item className="flex items-center rounded-md">
              <NavigationMenu.Trigger className="flex items-center px-2 py-0.5 rounded-md font-medium text-xs leading-4 text-text">
                Help
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
}
