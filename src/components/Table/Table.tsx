import {
  DIVIDER,
  Table as BuiTable,
  TableBuilder as BuiTableBuilder,
  TableBuilderColumn as BuiTableBuilderColumn,
  TableBuilderColumnProps as BuiTableBuilderColumnProps,
  TableBuilderProps as BuiTableBuilderProps,
  TableProps as BuiTableProps,
} from 'baseui/table-semantic'
import * as React from 'react'
import {border, borderRadius} from '../../utils/helpers/style'

export const Table: React.FC<BuiTableProps> = ({...delegated}) => {
  return (
    <BuiTable
      divider={DIVIDER.horizontal}
      overrides={{
        Root: {
          style: () => ({
            ...border('1px solid #E0E7ED'),
            ...borderRadius('16px'),
          }),
        },
      }}
      {...delegated}
    />
  )
}

export const TableBuilder = <T,>(
  props: BuiTableBuilderProps<T>,
): React.ReactElement<any, any> | null => {
  return (
    <BuiTableBuilder
      overrides={{
        Root: {
          style: () => ({
            ...border('1px solid #E0E7ED'),
            ...borderRadius('16px'),
          }),
        },
      }}
      {...props}
    />
  )
}

interface TableBuilderColumnProps<T> extends BuiTableBuilderColumnProps<T> {
  children: (row: T, rowIndex?: number) => React.ReactNode
}

export const TableBuilderColumn = <T = Record<string, string>,>(
  props: TableBuilderColumnProps<T>,
): React.ReactElement<any, any> | null => <BuiTableBuilderColumn {...props} />
