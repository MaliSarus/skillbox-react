import React from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {
}

export function Dropdown({button, children, isOpen, onOpen = noop, onClose = noop}: IDropdownProps) {
  const [isDropdownOpened, setIsDropdownOpened] = React.useState(isOpen)
  const handleOpen = () => {
    if (!isOpen) return
    setIsDropdownOpened(!isDropdownOpened)
  }

  React.useEffect(() => setIsDropdownOpened(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpened ? onOpen() : onClose(), [isDropdownOpened])

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpened(!isDropdownOpened)}>
        {button}
      </div>
      {isDropdownOpened && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpened(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
