import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { fetchImages } from "./ServerApi";
import { ImageGallery } from "./ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn";
import { Modal } from "./Modal";
import { Loader } from "./Loader";

export const App = () => {
  const [searched, setSearched] = useState("")
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState("")
  
  useEffect(()=>{
    if(!searched) return

    setLoading(true)
    fetchImages(searched, page)
    .then(res =>{ setImages(prev => page === 1 ? res.hits : [...prev, ...res.hits])})
    .finally(()=>{setLoading(false)})
  }, [searched, page])

  const handleSearched = (newSearched) =>{
    if(newSearched !== searched){
      setSearched(newSearched)
      setPage(1)
      setImages([])
    }
  }

  const handleLoadMore = () =>{
    setPage(prev => prev += 1 )
  }

  const openModal = (largeImg) =>{
    setModalImg(largeImg)
    setShowModal(true)
  }

  const closeModal = () =>{
    setShowModal(false)
  }


  return <>
    <SearchBar handleSearched={handleSearched}/>
    <ImageGallery images={images} openModal={openModal}/>
    <LoadMoreBtn handleLoadMore={handleLoadMore}/>
    {isLoading && <Loader />}
    {showModal && <Modal image={modalImg} closeModal={closeModal}/>}
  </>
};
