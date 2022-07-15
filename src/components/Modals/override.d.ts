export default override;
declare function override({ Root, Dialog, DialogContainer, Close }: {
    Root: any;
    Dialog: any;
    DialogContainer: any;
    Close: any;
}): {
    Root: {
        component: any;
        style: (props: any) => any;
        props: any;
    };
    Dialog: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
    DialogContainer: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
    Close: {
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
