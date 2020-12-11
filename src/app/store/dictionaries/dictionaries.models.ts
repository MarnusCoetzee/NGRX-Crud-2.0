import { Item, ControlItem, Icon } from '../../models/frontend';
export { Item, ControlItem, Icon } from '../../models/frontend';

export interface Dictionaries {
  colours: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
