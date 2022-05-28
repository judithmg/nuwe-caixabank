import { Image, View } from 'react-native';

import styles from './styles';

const logo = require('./img/logo.png');

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Header;
