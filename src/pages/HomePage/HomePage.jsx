import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <span>
        <NavLink to="/tweets">WELCOME TO TWEETS APP!</NavLink>
      </span>
    </div>
  );
};

export default HomePage;
