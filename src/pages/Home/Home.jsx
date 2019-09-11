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
          isSmall: false,
        },
        {
          name: 'blue',
          color: '#6663f3',
          isSmall: false,
        },
        {
          name: 'green',
          color: '#47b96c',
          isSmall: false,
        },
        {
          name: 'magenta',
          color: '#b848b9',
          isSmall: false,
        },
        {
          name: 'orange',
          color: '#f99a06',
          isSmall: false,
        },
      ],
    };
  }

  handleOnClick = (name) => {
    console.log(name);
    let newCylinders = [...this.state.cylinders]
    newCylinders = newCylinders.map(item => {
      if (item.name === name) {
        item.isSmall = !item.isSmall ? true : false;
      } else if (name === 'orange' || name === 'magenta') {
        item.isSmall = false;
      }
      return item;
    }) 
      this.setState({
        cylinders: newCylinders,
    });
  }

  render() {
    const { cylinders } = this.state;

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {cylinders.map((item, index) => (
            <li key={index}>
              <Cylinder
                color={item.color}
                name={item.name}
                isSmall={item.isSmall}
                onClick={() => {this.handleOnClick(item.name)}}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
