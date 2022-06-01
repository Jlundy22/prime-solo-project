import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const disc = useSelector(store => store.editDisc);
    return (
        <div className='detailPage'>
            <p>Manufactuer: {disc.manufacturer}</p>
            <p>Mold: {disc.mold}</p>
            <p>Price: ${disc.price}</p>
            <p>Sleepy Scale: {disc.sleepy_scale}</p>
            <img src={disc.img_path} width='100' />
            <p>Contact Info: {disc.username}@email.com </p>
        </div>
    )
}

export default Details;