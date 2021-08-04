import { ReactNode, Dispatch, SetStateAction } from 'react';
import { ReactSortable } from 'react-sortablejs';

type Props = {
  children: ReactNode;
  state: {
    id: number;
    value: string;
  }[];
  setState: Dispatch<SetStateAction<{ id: number; value: string }[]>>;
  onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
  axis: 'x' | 'y' | 'xy';
};

const SortableContainer = ({ children, state, setState, ...props }: Props): JSX.Element => {
  return (
    <ReactSortable tag="ul" list={state} setList={setState} animation={200} {...props}>
      {children}
    </ReactSortable>
  );
};

export default SortableContainer;
