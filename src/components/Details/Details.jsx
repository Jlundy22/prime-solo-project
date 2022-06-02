import { useDispatch, useSelector } from 'react-redux';


function Details() {
    const disc = useSelector(store => store.editDisc);
    let email = `mailto:${disc.username}@gmail.com`
    return (
        <div className='detailPage'>
            <p>Manufactuer: {disc.manufacturer}</p>
            <p>Mold: {disc.mold}</p>
            <p>Price: ${disc.price}</p>
            <p>Sleepy Scale: {disc.sleepy_scale}</p>
            <img src={disc.img_path} width='100' />
            <p>Seller: {disc.username} </p>
            <a href={email}>Conatact Seller</a>  
        </div>
    )
}

export default Details;