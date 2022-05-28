import { ActiveView } from '../types';

export interface TabProps {
  active: boolean;
  onPress: () => void;
  view: ActiveView;
}
