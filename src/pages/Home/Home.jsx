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

  // handleOnClick = (name, index) => {
  //   let newCylinders = [...this.state.cylinders];
  //   newCylinders[index].isSmall = this.state.cylinders[index].isSmall ? false : true;
    
  //   this.setState({
  //     cylinders: newCylinders,
  //   });
  // }

  handleOnClick = (name, index) => {
    let newCylinders = [...this.state.cylinders];
    // Poner todos a false menos el que he pinchado.
    // Hay que recorrerlos todos con un map.
    newCylinders = newCylinders.map(item => {
      if (item.name === name) {
        if (item.isSmall) {
          item.isSmall = false;
        } else {
          item.isSmall = true;
        }
        // item.isSmall = item.isSmall ? false : true;
      } else {
        item.isSmall = false;
      }

      // item.isSmall = item.name === name ? true : false;

      
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
                onClick={this.handleOnClick}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
