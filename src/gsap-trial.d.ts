declare module 'gsap-trial/SplitText' {
  export default class SplitText {
    constructor(element: string | HTMLElement | Element[] | string[], options?: SplitTextOptions);
    chars: Element[];
    lines: Element[];
    words: Element[];
    revert(): void;
  }

  interface SplitTextOptions {
    type?: string;
    charsClass?: string;
    linesClass?: string;
    wordsClass?: string;
    tag?: string;
    reduceWhiteSpace?: boolean;
  }
}

declare module '@react-three/postprocessing' {
  export const EffectComposer: any;
  export const N8AO: any;
}
