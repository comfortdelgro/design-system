export function Input({ overrides, startEnhancer, endEnhancer, ...restProps }: {
    [x: string]: any;
    overrides: any;
    startEnhancer: any;
    endEnhancer: any;
}): JSX.Element;
export namespace Input {
    namespace propTypes {
        const overrides: any;
    }
    namespace defaultProps {
        export const startEnhancer: any;
        export const endEnhancer: any;
        export namespace overrides_1 {
            const Root: {};
            const Input: {};
            const InputContainer: {};
            const After: {};
            const Before: {};
            const ClearIcon: {};
            const ClearIconContainer: {};
            const EndEnhancer: {};
            const MaskToggleButton: {};
            const MaskToggleHideIcon: {};
            const MaskToggleShowIcon: {};
            const StartEnhancer: {};
        }
        export { overrides_1 as overrides };
    }
}
