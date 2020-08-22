import { format } from 'date-fns';

export const addSpaceValueDeposit = (number) => String(number).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const renderProfitSumm = (initSumm, timeDeposit, rate) => Math.trunc(((initSumm * (rate / 100)) / 365) * timeDeposit);

export const docCreator = (
  valueDeposit,
  timeDeposit,
  profit,
  rate,
  typeDeposit,
) => ({
  info: {
    title: 'Тестовый документ PDF',
    author: 'БАНК РОССИЯ',
    subject: 'Вклад',
    keywords: 'Выписка вклада',
  },

  pageSize: 'A4',
  pageOrientation: 'landscape',
  pageMargins: [50, 50, 30, 60],

  header: [
    {
      text: 'Банк Россия. Выписка по вкладу.',
      alignment: 'center',
      margin: [10, 30, 10, 50],
    },
  ],
  footer: [
    {
      text: `Дата: ${format(Date.now(), 'dd-MM-yyyy')}. Подпись: ___________ .`,
      alignment: 'right',
      margin: [0, 10, 10, 50],
    },
  ],

  content: [
    {
      text: `Начальная сумма вклада: ${addSpaceValueDeposit(valueDeposit)} ₽.`,
    },
    {
      text: `Тип вклада: ${typeDeposit}.`,
    },
    {
      text: `Процентная ставка: ${rate}%.`,
    },
    {
      text: `Срок вклада: ${timeDeposit} дн.`,
    },
    {
      text: `Доход за ${timeDeposit} дн: ${addSpaceValueDeposit(profit)} ₽.`,
      style: { color: 'red', marginTop: '16px' },
    },
    {
      text: `Вы получите: ${addSpaceValueDeposit(
        String(valueDeposit + profit),
      )} ₽.`,
      style: { color: 'red' },
    },
  ],
});
