export function updateMonthlyBudget(transactions) {
  const sum = transactions.reduce(function (acc, transaction) {
    return acc + transaction.value * (transaction.type === 'spending' ? -1 : 1)
  }, 0)
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(sum)
}
