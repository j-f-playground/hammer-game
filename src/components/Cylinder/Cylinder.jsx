import { bool, func, string } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

class Cylinder extends React.PureComponent {
  static propTypes = {
    color: string.isRequired,
    name: string.isRequired,
    isSmall: bool,
    onClick: func,
  };

  static defaultProps = {
    isSmall: false,
    onClick: undefined,
  };

  render() {
    const { color, isSmall, onClick } = this.props;

    return (
      <div className={`${styles.container} ${isSmall ? styles.small : ''}`} onClick={onClick}>
        <div className={styles.center} style={{ backgroundColor: color }} />
        <div className={styles.top} style={{ backgroundColor: color }} />
        <div className={styles.bottom} style={{ backgroundColor: color }} />
      </div>
    );
  }
}

export default Cylinder;
