import { selectSortDirection, selectorSortBy, sortShipments } from '@/common/shipments-reducer'
import { SortDirectionT, sortType } from '@/common/types'
import { useAppDispatch, useAppSelector } from '@/store'

import s from '@/components/table/table.module.scss'

type Props = {
  title: sortType
}

export const SortButton = ({ title }: Props) => {
  const dispatch = useAppDispatch()
  const sortDirection = useAppSelector(selectSortDirection)

  const sortBy = useAppSelector(selectorSortBy)
  const filterHandler = (sortBy: sortType) => {
    dispatch(sortShipments(sortBy))
  }

  const renderSortDirection = (direction: SortDirectionT) => {
    switch (direction) {
      case 'down':
        return (
          <>
            <span className={s.arrowRed}>↓</span> <span className={s.arrowRed}>↓</span>
          </>
        )
      case 'up':
        return (
          <>
            <span className={s.arrowGreen}>↑</span> <span className={s.arrowGreen}>↑</span>
          </>
        )
      default:
        return (
          <>
            <span className={s.arrowRed}>↑</span> <span className={s.arrowGreen}>↓</span>
          </>
        )
    }
  }

  return (
    <button onClick={() => filterHandler(title)}>
      {sortBy !== title ? (
        <>
          <span className={s.arrowRed}>↑</span> <span className={s.arrowGreen}>↓</span>
        </>
      ) : (
        renderSortDirection(sortDirection.date)
      )}
    </button>
  )
}
