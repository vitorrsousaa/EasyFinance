import { StyledPopover } from './Popover.styles';
import trash from '../../assets/icons/trash.svg';
import edit from '../../assets/icons/edit.svg';
import * as PopoverUi from '@radix-ui/react-popover';

export interface PopoverViewProps {
  isOpen: boolean;
  onClose: () => void;
  handleDeleteTransaction: () => void;
  handleEditTransaction: () => void;
}

export function PopoverView(props: PopoverViewProps) {
  const { isOpen, onClose, handleDeleteTransaction, handleEditTransaction } =
    props;

  return (
    <PopoverUi.Root open={isOpen}>
      <PopoverUi.Anchor />
      <PopoverUi.Portal>
        <PopoverUi.Content
          className="content-popover"
          sideOffset={4}
          align="center"
          alignOffset={2}
          onInteractOutside={onClose}
        >
          <StyledPopover>
            <div onClick={handleEditTransaction} role="button">
              <img src={edit} alt="edit-icon" />
              <small>Editar</small>
            </div>
            <hr className="divider" />
            <div onClick={handleDeleteTransaction} role="button">
              <img src={trash} alt="edit-icon" />
              <small>Excluir</small>
            </div>
          </StyledPopover>
        </PopoverUi.Content>
      </PopoverUi.Portal>
    </PopoverUi.Root>
  );
}
