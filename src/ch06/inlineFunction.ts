type Driver = {
  numberOfLateDeliveries: number;
};

function rating(aDriver: Driver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver: Driver) {
  return aDriver.numberOfLateDeliveries > 5;
}

type Customer = {
  name: string;
  location: string;
};

function reportLines(aCustomer: Customer) {
  const lines: [string, string][] = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}

export { rating, reportLines };
