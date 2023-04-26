import { Projects } from '../projects/Projects';
import { Project } from '../projects/Project';

export const Home = () => {
  return (
    <Projects>
      <Project
        name='Music Albums'
        to='/music-albums'
        description='Select a music album to get cover image and tracks info'
      />
    </Projects>
  );
};
