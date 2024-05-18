import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div>
            <p className='flex items-center gap-2'><FaCircleCheck className='text-sky-500' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired,
};

export default Feature;