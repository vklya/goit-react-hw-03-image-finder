import css from './item.module.scss';

const ImageGalleryItem = ({ data, showImage }) => {
    return data.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li onClick={()=>showImage({largeImageURL, tags})} className={css.item} key={id}>
            <img src={webformatURL} alt={tags} className={css.image}/>
        </li>
    ))
};

export default ImageGalleryItem;