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
    constructor(props: Props, context?: Context);
  }

  export class PureComponent extends Component {}

  function createElement(...args:any[]): any;
  function cloneElement(element: any, props?: Props, ...children: any[]): any

  var Children: ReactChildren;
  var PropTypes: ReactPropTypes;


  //
  // Original @types/react definitions:
  // Copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
  //

  //
  // React.PropTypes
  // ----------------------------------------------------------------------

  interface Validator<T> {
      (object: T, key: string, componentName: string, ...rest: any[]): Error | null;
  }

  interface Requireable<T> extends Validator<T> {
      isRequired: Validator<T>;
  }

  type ValidationMap<T> = {[K in keyof T]?: Validator<T>};

  interface ReactPropTypes {
      any: Requireable<any>;
      array: Requireable<any>;
      arrayOf(type: Validator<any>): Requireable<any>;
      bool: Requireable<any>;
      element: Requireable<any>;
      func: Requireable<any>;
      instanceOf(expectedClass: {}): Requireable<any>;
      node: Requireable<any>;
      number: Requireable<any>;
      object: Requireable<any>;
      objectOf(type: Validator<any>): Requireable<any>;
      oneOf(types: any[]): Requireable<any>;
      oneOfType(types: Validator<any>[]): Requireable<any>;
      shape(type: ValidationMap<any>): Requireable<any>;
      string: Requireable<any>;
  }

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
