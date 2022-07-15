export const ModalHeader: StyletronComponent<C, P>;
export const ModalBody: StyletronComponent<C, P>;
export const ModalFooter: StyletronComponent<C, P>;
export const ModalButton: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export function Modal({ overrides, children, ...restProps }: {
    [x: string]: any;
    overrides: any;
    children: any;
}): JSX.Element;
export namespace Modal {
    namespace propTypes {
        const overrides: any;
        const children: any;
    }
    namespace defaultProps {
        export namespace overrides_1 {
            const Root: {};
            const Dialog: {};
            const DialogContainer: {};
            const Close: {};
        }
        export { overrides_1 as overrides };
    }
}
import * as React from "react";
