export default override;
declare function override({ Root, Separator, List, ListItem, Icon }: {
    Root: any;
    Separator: any;
    List: any;
    ListItem: any;
    Icon: any;
}): {
    Root: {
        component: any;
        style: (props: any) => any;
        props: any;
    };
    Separator: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
    List: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
    ListItem: {
        component: any;
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
    };
    Icon: {
        style: ({ $theme, $disabled, $error, ...restProps }: {
            [x: string]: any;
            $theme: any;
            $disabled: any;
            $error: any;
        }) => any;
        props: any;
        component: {
            component: any;
        } | (() => string);
    };
};
