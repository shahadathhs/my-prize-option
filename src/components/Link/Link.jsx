import PropTypes from 'prop-types';

const Link = ({route}) => {
  return (
    <li className='hover:bg-gray-500'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
}

export default Link;