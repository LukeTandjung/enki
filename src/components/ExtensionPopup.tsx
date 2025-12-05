import { Separator } from '@base-ui-components/react/separator';
import { bannerImage } from 'assets';
import { MenuBar, PersonalTokens, ActiveMCPs } from 'components';

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
          <PersonalTokens />
          <ActiveMCPs />
        </div>
      </div>
    </div>
  );
}
