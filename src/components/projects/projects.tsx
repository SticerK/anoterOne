import Card from './card';
import styles from './project.module.scss';
import data from '../../data/data';

const Projects = () => {
  console.log(data);

  return (
    <div className={styles.projects}>
      {data.map((card, idx) => (
        <Card index={idx} card={card} />
      ))}
    </div>
  );
};

export default Projects;
