import { useDispatch, useSelector } from 'react-redux';


function Details() {
    const disc = useSelector(store => store.editDisc);
    let email = `mailto:${disc.username}@email.com?subject=Drop Zone sale
    &body=Hello I am Interested in buying your ${disc.manufacturer} ${disc.mold} for $${disc.price}! `
    return (
        <div className='detailPage'>
            <p>Manufactuer: {disc.manufacturer}</p>
            <p>Mold: {disc.mold}</p>
            <p>Price: ${disc.price}</p>
            <p className='sleepy-text'>Sleepy Scale: {disc.sleepy_scale}</p>
            <img src={disc.img_path} width='100' />
            <p>Seller: {disc.username} </p>
            <a href={email}>Contact Seller</a>  
        </div>
    )
}

export default Details;