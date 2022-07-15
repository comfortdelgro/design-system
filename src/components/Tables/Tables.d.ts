export function Table({ overrides, ...restProps }: {
    [x: string]: any;
    overrides: any;
}): JSX.Element;
export namespace Table {
    namespace propTypes {
        export { overridePropT as overrides };
    }
    namespace defaultProps {
        export { defaultOverridesProp as overrides };
    }
}
export function TableBuilder({ overrides, ...restProps }: {
    [x: string]: any;
    overrides: any;
}): JSX.Element;
export namespace TableBuilder {
    export namespace propTypes_1 {
        export { overridePropT as overrides };
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps_1 {
        export { defaultOverridesProp as overrides };
    }
    export { defaultProps_1 as defaultProps };
}
export function TableBuilderColumn(props: any): JSX.Element;
declare const overridePropT: any;
declare namespace defaultOverridesProp {
    const Root: {};
    const Table: {};
    const TableHead: {};
    const TableHeadRow: {};
    const TableHeadCell: {};
    const TableHeadCellSortable: {};
    const TableBody: {};
    const TableBodyRow: {};
    const TableBodyCell: {};
    const TableLoadingMessage: {};
    const TableEmptyMessage: {};
    const SortAscIcon: {};
    const SortDescIcon: {};
    const SortNoneIcon: {};
}
export {};
