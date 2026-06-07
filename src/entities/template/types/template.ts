import type { Widget } from '../hooks/use-editor';

export interface ITemplate {
  id: string;
  name: string;
  widgents: Widget[];
}
