export class Api {
  static async updateDashboardDetails() {
    const response = await fetch('data/contacts.json');
    const data = await response.json();
    return data;
  }

  static async getUsersData() {
    const response = await fetch('data/contacts.json');
    const data = await response.json();
    return data;
  }
}
