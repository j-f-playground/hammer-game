import Cylinder from 'components/Cylinder';
import React from 'react';
import styles from './styles.module.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cylinders: [
        {
          name: 'red',
          color: '#d64a4a',
        },
        {
          name: 'blue',
          color: '#6663f3',
        },
        {
          name: 'green',
          color: '#47b96c',
        },
        {
          name: 'magenta',
          color: '#b848b9',
        },
        {
          name: 'orange',
          color: '#f99a06',
        },
      ],
    };
  }

  render() {
    const { cylinders } = this.state;

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {cylinders.map((item, index) => (
            <li key={index}>
              <Cylinder color={item.color} name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
