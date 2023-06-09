/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SbButton {
        /**
          * Disable
         */
        "disabled": boolean;
        /**
          * Icon
         */
        "icon": string;
        /**
          * Theme has the following themes: 'primary' | 'secondary' | 'light' | 'dark'
         */
        "theme": string;
    }
}
declare global {
    interface HTMLSbButtonElement extends Components.SbButton, HTMLStencilElement {
    }
    var HTMLSbButtonElement: {
        prototype: HTMLSbButtonElement;
        new (): HTMLSbButtonElement;
    };
    interface HTMLElementTagNameMap {
        "sb-button": HTMLSbButtonElement;
    }
}
declare namespace LocalJSX {
    interface SbButton {
        /**
          * Disable
         */
        "disabled"?: boolean;
        /**
          * Icon
         */
        "icon"?: string;
        /**
          * Theme has the following themes: 'primary' | 'secondary' | 'light' | 'dark'
         */
        "theme"?: string;
    }
    interface IntrinsicElements {
        "sb-button": SbButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sb-button": LocalJSX.SbButton & JSXBase.HTMLAttributes<HTMLSbButtonElement>;
        }
    }
}
