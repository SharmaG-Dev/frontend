import React, { useState } from 'react'

const Gallary = () => {

    const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrHDKwuA3D0rJNRNJXATcFcKZZsLPhO4xBOcyL72jjWRlPmmip2SWQ6HDOCTNql2H9ZU&usqp=CAU";
    const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOtorc1SBSFxmzeOsmRKZC0JXd-wMrh5a-g&usqp=CAU"
    const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-8MSoi9476APwLtP_11Gco0lXxOeY2mMGQ&usqp=CAU"
    const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl63qhfVcSa62enuQ1vWQbebUPUrp6epYCQw&usqp=CAU"
    const img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpp-yKxjgY7p_CgEvigmp0PassUACprcTfQ&usqp=CAU"


    const [mainimg, updateimg] = useState(img1);

    const changeimg =(img) => {
        updateimg(img)
    }
  return (
    <div className="contianer">
        {/* <img src="" alt="image hai yeh" /> */}
        <img style={{width : "80%" , height :"80vh"}} className='image-fuied' src={mainimg} alt="image hai yeh" />
        <div className="row mt-5">
            <div className="col-md-3">
            <img className='img-fluied' src={img2} onMouseEnter={ (e) => {changeimg(img2)}} alt="image hai yeh" />
            </div>
            <div className="col-md-3">
            <img className='img-fluied' src={img3} onMouseEnter={ (e) => {changeimg(img3)}} alt="image hai yeh" />
            </div>
            <div className="col-md-3">
            <img className='img-fluied' src={img4} onMouseEnter={ (e) => {changeimg(img4)}} alt="image hai yeh" />
            </div>
            <div className="col-md-3">
            <img className='img-fluied' src={img5} onMouseEnter={ (e) => {changeimg(img5)}} alt="image hai yeh" />
            </div>
            </div>
        </div>
  )
}

export default Gallary;