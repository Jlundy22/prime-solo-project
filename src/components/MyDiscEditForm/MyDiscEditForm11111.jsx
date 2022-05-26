import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MyDiscEditForm1() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ONE_DISC',
            payload: discId
        })
    }, [])

    const editDisc = useSelector(store => store.editDisc)

    const params = useParams();
    const studentId = params.id;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_DISC',
            payload: editDisc
        })
        history.push('/Mydiscs')
    }

    return (
        <div>
            <h2>Edit Disc:</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder='GitHub Username'
                    value={editDisc.manufacturer}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_MANUFACTURER',
                            payload: e.target.value
                        })
                    }}
                />
                <input
                    placeholder='Mold'
                    value={editDisc.mold}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_MOLD',
                            payload: e.target.value
                        })
                    }}
                />
                  <input
                    placeholder='Price'
                    value={editDisc.mold}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_MOLD',
                            payload: e.target.value
                        })
                    }}
                />
                <button>Update Disc</button>
            </form>

            <button
                onClick={() => history.push('/myDiscs')}>
                Cancel
            </button>
        </div>
    );
}


export default MyDiscEditForm1;
