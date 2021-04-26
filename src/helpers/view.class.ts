export class View {
  constructor(public type: string, public template: (props: any) => string) {}
}
