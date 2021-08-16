import { ReactNode } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ children }: { children: ReactNode }) => (
  <li>{children}</li>
));

type Props = {
  state: {
    id: number;
    value: string;
  }[];
  items: ReactNode[];
  onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
  axis: 'x' | 'y' | 'xy';
};

const SortableList = SortableContainer(({ items }: Props) => {
  return (
    <ul>
      {items.map((value, index) => {
        <SortableItem key={index} index={index}>
          {value}
        </SortableItem>;
      })}
    </ul>
  );
});

export default SortableList;
