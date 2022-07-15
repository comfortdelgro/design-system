export default override;
declare function override({ Label, Caption }: {
    Label: any;
    Caption: any;
}): {
    Label: {
        component: any;
        style: (props: any) => any;
        props: any;
    };
    Caption: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
};
