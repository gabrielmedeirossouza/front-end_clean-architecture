import { useView } from '@presenters/hooks/use-view';
import { DividerComponent, DividerViewState } from '@presenters/components/data-displays/divider';

const headerDividerViewState = () => new DividerViewState({ orientation: "horizontal", size: 50 });

export function EditorPage() {
  const [HeaderDivider, headerDividerState] = useView(DividerComponent, headerDividerViewState);
  const [HeaderDivider2] = useView(DividerComponent, headerDividerViewState);
  const [HeaderDivider3] = useView(DividerComponent, headerDividerViewState);
  const [HeaderDivider4] = useView(DividerComponent, headerDividerViewState);

  return (
    <div onClick={() => {
      headerDividerState.size = 100;
    }}>
      <HeaderDivider />
      <HeaderDivider2 />
      <HeaderDivider3 />
      <HeaderDivider4 />
    </div>
  );
}
