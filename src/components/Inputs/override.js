import { resolveComponent, resolveProps, resolveStyle } from "../override";

const override = ({
  disabled, error, isFocused,
  Root,
  Input,
  InputContainer,
  After,
  Before,
  ClearIcon,
  ClearIconContainer,
  EndEnhancer,
  MaskToggleButton,
  MaskToggleHideIcon,
  MaskToggleShowIcon,
  StartEnhancer,
}) => {

  const getInputBg = ($theme) => disabled ? $theme.disabledColors.inputBg : $theme.primaryColors.white;
  const getBorderColor = ($theme) =>(
    error
      ? disabled? $theme.outline10 : $theme.secondaryColors.red
      : isFocused ? $theme.primaryColors.blue : $theme.outline10
  );

  return {
    Root: {
      style: (props) => ({
        border: `2px solid ${getBorderColor(props.$theme)} !important`,
        borderRadius: "8px",
        background: `${getInputBg(props.$theme)} !important`,
        lineHeight: "125%",
        ...resolveStyle(Root, props),
      }),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    InputContainer: {
      style: (props) => ({
        border: "unset !important",
        background: 'transparent !important',
        ...resolveStyle(InputContainer, props),
      }),
      props: resolveProps({}, InputContainer),
      ...resolveComponent(InputContainer),
    },
    Input: {
      style: (props) => ({
        border: "unset !important",
        padding: "13px 16px",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        color: props.$theme.secondaryColors.text,
        '::placeholder': {
          color: props.$theme.placeholderColor,
        },
        ...resolveStyle(Input, props),
      }),
      props: resolveProps({}, Input),
      ...resolveComponent(Input),
    },
    After: {
      style: (props) => resolveStyle(After, props),
      props: resolveProps({}, After),
      ...resolveComponent(After),
    },
    Before: {
      style: (props) => resolveStyle(Before, props),
      props: resolveProps({}, Before),
      ...resolveComponent(Before),
    },
    ClearIcon: {
      style: (props) => resolveStyle(ClearIcon, props),
      props: resolveProps({}, ClearIcon),
      ...resolveComponent(ClearIcon),
    },
    ClearIconContainer: {
      style: (props) => resolveStyle(ClearIconContainer, props),
      props: resolveProps({}, ClearIconContainer),
      ...resolveComponent(ClearIconContainer),
    },
    EndEnhancer: {
      style: (props) => resolveStyle(EndEnhancer, props),
      props: resolveProps({}, EndEnhancer),
      ...resolveComponent(EndEnhancer),
    },
    MaskToggleButton: {
      style: (props) => resolveStyle(MaskToggleButton, props),
      props: resolveProps({}, MaskToggleButton),
      ...resolveComponent(MaskToggleButton),
    },
    MaskToggleHideIcon: {
      style: (props) => resolveStyle(MaskToggleHideIcon, props),
      props: resolveProps({}, MaskToggleHideIcon),
      ...resolveComponent(MaskToggleHideIcon),
    },
    MaskToggleShowIcon: {
      style: (props) => resolveStyle(MaskToggleShowIcon, props),
      props: resolveProps({}, MaskToggleShowIcon),
      ...resolveComponent(MaskToggleShowIcon),
    },
    StartEnhancer: {
      style: (props) => resolveStyle(StartEnhancer, props),
      props: resolveProps({}, StartEnhancer),
      ...resolveComponent(StartEnhancer),
    },
  }
};

export default override;
