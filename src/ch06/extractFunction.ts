type Invoice = {
  orders: { amount: number }[];
  customer: string;
  dueDate: Date;
};

class Clock {
  public static today = new Date();
}

function printOwing(invoice: Invoice) {
  printBanner();
  const outstanding: number = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("******************");
  console.log("****  고객 채무  ****");
  console.log("******** **********");
}

function calculateOutstanding(invoice: Invoice): number {
  let result: number = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice: Invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice: Invoice, outstanding: number) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
