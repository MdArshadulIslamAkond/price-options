import PropTypes from 'prop-types';
import Feature from '../feature/feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    // console.log(option);
    return (
        <div className='bg-blue-500 text-white p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>
                {name}
            </h4>
          <div className='pl-4 flex-grow'>
          {
            features.map(feature => <Feature feature={feature} key={feature} />)
           }
          </div>
          <button className='mt-4 bg-green-500 w-full rounded-md text-center p-2 font-bold hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
}

export default PriceOption;