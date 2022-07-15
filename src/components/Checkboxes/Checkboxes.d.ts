export function Checkbox({ overrides, children, ...restProps }: {
    [x: string]: any;
    overrides: any;
    children: any;
}): JSX.Element;
export namespace Checkbox {
    namespace propTypes {
        const overrides: any;
    }
    namespace defaultProps {
        export namespace overrides_1 {
            const Root: {};
            const Checkmark: {};
            const Label: {};
            const Toggle: {};
            const ToggleInner: {};
            const ToggleTrack: {};
        }
        export { overrides_1 as overrides };
    }
}
