import {Icon} from '@preact-material/icon';
import {h} from 'preact';

export class ChipCheckmark extends Icon {
  protected componentName = 'chip__checkmark';
  protected mdcProps = [];

  protected materialDom(props) {
    return (
      <div {...props}>
        <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path
            class="mdc-chip__checkmark-path"
            fill="none"
            stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      </div>
    );
  }
}