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
          name: 'white',
          color: '#ffffff',
          isSmall: false,
        },
      ],
    };
  }

  // handleOnClick = (name, index) => {
  //   let newCylinders = [...this.state.cylinders]
  //   newCylinders[index].isSmall = this.state.cylinders[index].isSmall ? false : true
  //   if (name === 'white') {
  //     newCylinders = newCylinders.map(item => {
  //       let newItem = {...item};
  //       if (item.name === 'blue' || item.name === 'red' || item.name === 'magenta' || item.name === 'green') {
  //         newItem.isSmall = newItem.isSmall ? false : true;
  //         //newItem.isSmall = false;
  //       } 
  //       return newItem;
  //     })
  //   }
  //   this.setState({
  //     cylinders: newCylinders,
  //   });
  // }

  handleOnClick = (name, index) => {
    let newCylinders = [...this.state.cylinders]
    newCylinders[index].isSmall = this.state.cylinders[index].isSmall ? false : true

    if (newCylinders[index].isSmall === true) {
      newCylinders = newCylinders.map(item => {
        let newItem = {...item};
        newItem.isSmall = !item.isSmall ? true : false;
        return newItem;
      })
    }

    console.log(newCylinders);
    
    this.setState({
      cylinders: newCylinders,
    });
  }

  // handleOnClick = (name) => {
  //   let newCylinders = [...this.state.cylinders]
  //   newCylinders = newCylinders.map(item => {
  //     let newItem = {...item};
  //     newItem.isSmall = item.name === name ? !item.isSmall : false;
  //     return newItem;
  //   })

  //   this.setState({
  //     cylinders: newCylinders,
  //   });
  // }

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
