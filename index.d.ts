// Forked by Moshe Bergman 12/13
// Type definitions for React v0.14
// Project: http://facebook.github.io/react/

export = React;
export as namespace React;

declare namespace React {
  type Props = {[key: string]: any};
  type State = Props;
  type Context = Props;
  type Refs = Props;

  export class Component {
    context: Context;
    props: Props;
    refs: Refs;
    state: State;
    setState: (partialState: State, cb?: Function) => void;
    forceUpdate(callBack?: () => void): void;
    constructor(props: Props, context?: Context);
  }

  export class PureComponent extends Component {}

  function createElement(...args:any[]): any;
  function createContext(...args:any[]): any;
  function cloneElement(element: any, props?: Props, ...children: any[]): any

  var Children: ReactChildren;
  const Fragment: any;

  //
  // React.Children
  // ----------------------------------------------------------------------

  interface ReactChildren {
    map<T>(children: any, fn: (child: any, index: number) => T): T[];
    forEach(children: any, fn: (child: any, index: number) => any): void;
    count(children: any): number;
    only(children: any): any;
    toArray(children: any): any[];
  }
}
