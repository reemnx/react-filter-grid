import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { Filter } from './components/Filter'
import { ViewHeader } from './components/ViewHeader'
import { GridWrapper } from './components/GridWrapper'
import { PhotoInterface } from './interfaces/Photo'
import { Thumbnail } from './components/thumbnail/Thumbnail'
import { ChildrenModal } from './components/userMessages/ChildrenModal';
import { fetchPhotos, selectPhotos } from './app/reducers/photoSlice'

function App() {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);
  const [dataSet, setDataSet] = useState<PhotoInterface[]>([])
  const [filteredData, setFilterData] = useState<PhotoInterface[]>([])
  const [selectedGridItem, setGridItem] = useState<PhotoInterface | null>(null)
  useEffect(() => {
    getPhotos()
  }, [])

  useEffect(() => {
    setDataSet(photos)
    setFilterData(photos)
  }, [photos])

  const getPhotos = () => {
    dispatch(fetchPhotos('/photos'))
  }

  const onSelect = (id: number) => {
    setGridItem(dataSet[id - 1])
  }

  const filterList = (filterValue: string) => {
    const filteredDataSet = dataSet.filter((i) => i.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
    setFilterData(filteredDataSet)
  }

  const handleClose = () => {
    setGridItem(null)
  }


  return (
    <div className="app-wrapper flex column">
      <ViewHeader content='Photo Albums Page' />
      <Filter handleFilter={filterList} placeHolder="Search Photo" ctaContent="Select Album" />
      <GridWrapper minMaxItemWidth="300px" >
        {!!filteredData.length ? filteredData.map((item) => {
          return <Thumbnail onSelect={onSelect} data={item} key={item.id} />
        }) : 'If data set is empty ill be shown'}
        {selectedGridItem && <ChildrenModal handleClose={handleClose}> <Thumbnail data={selectedGridItem} /> </ChildrenModal>}
      </GridWrapper>
    </div>
  );
}

export default App;
