import { bool, func, string, num } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

class Cylinder extends React.PureComponent {
  static propTypes = {
    color: string.isRequired,
    name: string.isRequired,
    isSmall: bool,
    onClick: func,
    index: num,
  };

  static defaultProps = {
    isSmall: false,
    onClick: undefined,
    index: undefined,
  };

  onClick = () => {
    this.props.onClick(this.props.name, this.props.index)
  }

  render() {
    const { color, isSmall } = this.props;
    return (
      <div className={`${styles.container} ${isSmall ? styles.small : ''}`} onClick={this.onClick}>
        <div className={styles.center} style={{ backgroundColor: color }} />
        <div className={styles.top} style={{ backgroundColor: color }} />
        <div className={styles.bottom} style={{ backgroundColor: color }} />
      </div>
    );
  }
}

export default Cylinder;
