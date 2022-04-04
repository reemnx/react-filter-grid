import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { Filter } from './components/Filter'
import { ViewHeader } from './components/ViewHeader'
import { GridWrapper } from './components/GridWrapper'
import { PhotoInterface } from './interfaces/Photo'
import { Thumbnail } from './components/thumbnail/Thumbnail'

function App() {
  const [dataSet, setDataSet] = useState<PhotoInterface[]>([])
  const [filteredData, setFilterData] = useState<PhotoInterface[]>([])
  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = async () => {
    const fakeData = [
      {
        albumId: 1,
        id: 1,
        title: "Reem is king",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 2,
        title: "king is queen",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 3,
        title: "hello mate",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 4,
        title: "elon mate mask",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },

    ]
    setDataSet(fakeData)
    setFilterData(fakeData)
  }

  const filterList = (filterValue: string) => {
    const filteredDataSet = dataSet.filter((i) => i.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
    setFilterData(filteredDataSet)
  }
  return (
    <div className="app-wrapper flex column">
      <ViewHeader content='Photo Albums Page' />
      <Filter handleFilter={filterList} placeHolder="Search Photo" ctaContent="Select Album" />
      <GridWrapper minMaxItemWidth="300px" >
        {!!filteredData.length ? filteredData.map((item, idx) => {
          return <Thumbnail data={item} key={item.id} />
        }) : 'If data set is empty ill be shown'}
      </GridWrapper>
    </div>
  );
}

export default App;
