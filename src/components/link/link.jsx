import PropTypes from 'prop-types'

const Link = ({route}) => {
    const{path,name} = route;
    return (
        <div>
            <li className="mr-10 hover:bg-yellow-500 px-6">
            <a href={path}>{name}</a>
          </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;