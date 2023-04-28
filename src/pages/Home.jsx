import { Projects } from '../projects/Projects';
import { Project } from '../projects/Project';
import { useStore } from '../store/store';

export const Home = () => {
  const setProject = useStore((state) => state.setProjectName);

  return (
    <Projects>
      <Project
        name='Music Albums'
        to='/music-albums'
        description='Select a music album to get cover image and tracks info'
        onClick={() => setProject('Music Albums')}
      />
    </Projects>
  );
};
