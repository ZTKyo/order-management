/**
 * 备注单元格组件
 */

import React, { useState, useCallback, memo } from 'react';
import styles from './RemarkCell.module.css';

interface RemarkCellProps {
  value: string;
  onSave: (value: string) => void;
}

const RemarkCell: React.FC<RemarkCellProps> = memo(({ value, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');

  const handleSave = useCallback(() => {
    onSave(draft);
    setEditing(false);
  }, [draft, onSave]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSave();
      if (e.key === 'Escape') setEditing(false);
    },
    [handleSave]
  );

  const handleStartEdit = useCallback(() => {
    setDraft(value || '');
    setEditing(true);
  }, [value]);

  if (editing) {
    return (
      <div className={styles.editContainer}>
        <input
          autoFocus
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.input}
        />
        <button onClick={handleSave} className={styles.saveBtn}>
          ✓
        </button>
        <button onClick={() => setEditing(false)} className={styles.cancelBtn}>
          ✕
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleStartEdit}
      title="点击编辑备注"
      className={styles.display}
    >
      {value || '添加备注…'}
    </div>
  );
});

RemarkCell.displayName = 'RemarkCell';

export default RemarkCell;
