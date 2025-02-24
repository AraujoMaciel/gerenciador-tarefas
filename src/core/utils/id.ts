export default class Id {
  static get novoId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
