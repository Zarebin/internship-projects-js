import { Link } from 'react-router-dom'
import { getAsyncCategoriesWithSaga } from '../../../src/features/image-label-verification/Actions'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectCategories} from '../../features/image-label-verification/imageLabelVerificationSlice'

const ParentComponent = () => {

    //const dispatch = useAppDispatch();

    return (
    <Link to="/imageLabelVerification">
        <button>Image Label Verification</button>
    </Link>
    
    )
}


export default ParentComponent;