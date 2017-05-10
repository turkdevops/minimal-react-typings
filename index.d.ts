// Forked by Moshe Bergman 12/13
// Type definitions for React v0.14
// Project: http://facebook.github.io/react/

export = React;
export as namespace React;

declare namespace React {
  export class Component {
    state: any;
    setState: Function;
    props: any;
    constructor(props: any);
    static propTypes: any;
    static defaultProps: any;
    refs: any;
  }

  export class PureComponent extends Component {}

  function createElement(...args:any[]): any;
  function cloneElement(...args:any[]): any;
  var PropTypes: any;
  var Children: any;
}
