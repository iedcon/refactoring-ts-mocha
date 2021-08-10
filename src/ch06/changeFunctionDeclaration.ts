type Customer = {
  address: {
    state: string;
  };
};

function inNewEngland(stateCode: string) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

function extractNewEnglanders(someCustomers: Customer[]) {
  return someCustomers.filter((c) => inNewEngland(c.address.state));
}

export { extractNewEnglanders };
