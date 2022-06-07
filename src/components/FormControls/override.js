const override = ({ Label, Caption }) => ({
  Label: Label || {
    style: ({ $theme }) => ({
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "125%",
      marginBottom: "-4px",
      color: $theme.secondaryColors.label,
    }),
  },
  Caption: Caption || {
    style: ({ $theme, $disabled, $error }) => ({
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      margin: "4px 0 0 0",
      color: $disabled 
              ? $theme.disabledColors.helper
              : ( $error ? $theme.secondaryColors.red : $theme.secondaryColors.helper),
    }),
  },
});
export default override;