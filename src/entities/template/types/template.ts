import type { IWidget } from './widget';

export interface ITemplate {
  id: string;
  name: string;
  widgets: IWidget[];
}
