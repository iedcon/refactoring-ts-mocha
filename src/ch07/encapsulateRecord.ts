interface OrganizationData {
  name: string;
  country: string;
}

class Organization {
  private _name: string;
  private _country: string;

  constructor(data: OrganizationData) {
    this._name = data.name;
    this._country = data.country;
  }

  public set name(aString: string) {
    this._name = aString;
  }

  public get name() {
    return this._name;
  }

  public get country() {
    return this._country;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

export function getOrganization() {
  return organization;
}
