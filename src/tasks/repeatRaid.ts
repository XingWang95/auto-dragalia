import { tryTransform2dragon } from '@/battle';
import {
  autoBattleSwitchOff,
  closeButton,
  giveUpButtonBlue,
  giveUpButtonWhite,
  okButton,
  repeatBattleButton,
  repeatWithStaminaButton,
  retryButton,
  startBattleButton
} from '@/images';
import { clickImage, tryClickImage } from '@/imageUtil';
import { store } from '@/store';

export function repeatRaid(): void {
  tryClickImage(startBattleButton);
  tryClickImage(autoBattleSwitchOff);
  tryClickImage(retryButton);
  tryClickImage(okButton);
  tryClickImage(closeButton);
  try {
    clickImage(giveUpButtonWhite);
    sleep(500);
    clickImage(giveUpButtonBlue);
  } catch {
    console.verbose('Give up button not visible');
  }
  try {
    clickImage(repeatBattleButton);
    sleep(500);
    clickImage(repeatWithStaminaButton);
    sleep(500);
    clickImage(okButton);
    store.currentTask = undefined;

    return;
  } catch {
    console.verbose('Repeat button not visible');
  }
  tryTransform2dragon();
  sleep(1000);
}