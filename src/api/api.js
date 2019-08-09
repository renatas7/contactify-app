export class Api {
  static async updateDashboardDetails() {
    let response = await fetch('data/contacts.json');
    let data = await response.json();
    return data;
  }

  static async getUsersData() {
    let response = await fetch('data/contacts.json');
    let data = await response.json();
    return data;
  }
}
