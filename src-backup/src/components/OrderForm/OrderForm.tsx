/**
 * 新增订单表单组件
 */

import React, { useState, useCallback, memo } from 'react';
import { OrderFormData } from '../../types';
import { INITIAL_FORM_DATA } from '../../constants';
import { localToday, validateOrderId, validateAmount } from '../../utils';
import styles from './OrderForm.module.css';

interface OrderFormProps {
  onSubmit: (order: { id: string; amount: number; agent: string; received: boolean; receiveDate: string | null; entryDate: string; remark: string; paid: boolean; paidDate: null }) => void;
  onClose: () => void;
  existingIds: string[];
  agents: string[];
  onAddAgent: (name: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = memo(({ onSubmit, onClose, existingIds, agents, onAddAgent }) => {
  const [form, setForm] = useState<OrderFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<{ id?: string; amount?: string }>({});

  const updateForm = useCallback((field: keyof OrderFormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // 清除对应字段的错误（使用函数式 setState 避免依赖 errors）
    setErrors(prev => {
      if (field in prev) {
        return { ...prev, [field]: undefined };
      }
      return prev;
    });
  }, []);

  const handleAddAgent = useCallback(() => {
    const name = prompt('请输入新客服名称：');
    if (name && name.trim()) {
      onAddAgent(name.trim());
      updateForm('agent', name.trim());
    }
  }, [onAddAgent, updateForm]);

  const handleSubmit = useCallback(() => {
    // 验证订单号
    const idValidation = validateOrderId(form.id);
    if (!idValidation.valid) {
      setErrors(prev => ({ ...prev, id: idValidation.message }));
      return;
    }

    // 检查订单号是否已存在
    if (existingIds.includes(form.id.trim())) {
      setErrors(prev => ({ ...prev, id: '订单号已存在' }));
      return;
    }

    // 验证金额
    const amountValidation = validateAmount(form.amount);
    if (!amountValidation.valid) {
      setErrors(prev => ({ ...prev, amount: amountValidation.message }));
      return;
    }

    // 提交表单
    onSubmit({
      id: form.id.trim(),
      amount: Number(form.amount),
      agent: form.agent,
      received: form.received,
      receiveDate: form.received ? form.receiveDate || localToday() : null,
      entryDate: localToday(),
      remark: form.remark,
      paid: false,
      paidDate: null,
    });

    // 重置表单
    setForm(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [form, existingIds, onSubmit, onClose]);

  return (
    <div className={styles.form}>
      <div className={styles.title}>新增订单</div>

      <div className={styles.grid}>
        <div>
          <div className={styles.label}>订单号</div>
          <input
            className={`${styles.input} ${errors.id ? styles.inputError : ''}`}
            placeholder="260418-XXXXXXXXXXXXXXX"
            value={form.id}
            onChange={e => updateForm('id', e.target.value)}
          />
          {errors.id && <div className={styles.error}>{errors.id}</div>}
        </div>
        <div>
          <div className={styles.label}>金额（¥）</div>
          <input
            className={`${styles.input} ${errors.amount ? styles.inputError : ''}`}
            type="number"
            placeholder="170"
            value={form.amount}
            onChange={e => updateForm('amount', e.target.value)}
          />
          {errors.amount && <div className={styles.error}>{errors.amount}</div>}
        </div>
        <div>
          <div className={styles.label}>客服</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <select
              className={styles.input}
              value={form.agent}
              onChange={e => updateForm('agent', e.target.value)}
              style={{ flex: 1 }}
            >
              {agents.map(a => (
                <option key={a}>{a}</option>
              ))}
            </select>
            <button
              type="button"
              className={styles.btnAddAgent}
              onClick={handleAddAgent}
              title="添加新客服"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className={styles.grid2}>
        <div>
          <div className={styles.label}>备注（房子名称等）</div>
          <input
            className={styles.input}
            placeholder="如：万科翡翠山 A栋"
            value={form.remark}
            onChange={e => updateForm('remark', e.target.value)}
          />
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={form.received}
              onChange={e => updateForm('received', e.target.checked)}
            />
            已收货
          </label>
        </div>
      </div>

      {form.received && (
        <div className={styles.dateRow}>
          <span className={styles.label}>收货日期</span>
          <input
            className={styles.dateInput}
            type="date"
            value={form.receiveDate}
            onChange={e => updateForm('receiveDate', e.target.value)}
          />
        </div>
      )}

      <div className={styles.hint}>录入日期将自动记录为今天：{localToday()}</div>

      <div className={styles.actions}>
        <button className={styles.btnPrimary} onClick={handleSubmit}>
          确认添加
        </button>
        <button className={styles.btnGhost} onClick={onClose}>
          取消
        </button>
      </div>
    </div>
  );
});

OrderForm.displayName = 'OrderForm';

export default OrderForm;
