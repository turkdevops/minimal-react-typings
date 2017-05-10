// Forked by Moshe Bergman 12/13
// Type definitions for React v0.14
// Project: http://facebook.github.io/react/

export = React;
export as namespace React;

declare namespace React {
  export class Component extends PureComponent {
    state: any;
    setState: Function;
  }

  export class PureComponent {
    props: any;
    constructor(props: any);
    static propTypes: any;
    static defaultProps: any;
  }

  function createElement(...args:any[]): any;
  var PropTypes : any;
}
