// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'components';

// Services
import { t } from 'services';

// Assets
import styles from './styles';

const Header = ({ left, back, drawerButton, body, title, right, style, goBack, drawerToggle }) => (
  <View style={[styles.container, style]}>
    <View style={styles.left}>
      <Choose>
        <When condition={left}>{left}</When>
        <When condition={back}>
          <Button transparent onPress={goBack}>
            <Icon name='ios-arrow-back-outline' style={styles.icon} />
          </Button>
        </When>
        <When condition={drawerButton}>
          <Button transparent onPress={drawerToggle}>
            <Icon name='ios-menu-outline' style={styles.icon} />
          </Button>
        </When>
        <Otherwise />
      </Choose>
    </View>
    <View style={styles.body}>
      <Choose>
        <When condition={body}>{body}</When>
        <Otherwise>
          <Text style={styles.text}>{t(title)}</Text>
        </Otherwise>
      </Choose>
    </View>
    <View style={styles.right}>
      <If condition={right}>{right}</If>
    </View>
  </View>
);

Header.propTypes = {
  left: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  back: PropTypes.bool,
  drawerButton: PropTypes.bool,
  body: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  title: PropTypes.string,
  right: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  style: View.propTypes.style,
  goBack: PropTypes.func.isRequired,
  drawerToggle: PropTypes.func.isRequired
};

Header.defaultProps = {
  left: undefined,
  back: false,
  drawerButton: false,
  body: undefined,
  title: undefined,
  right: undefined,
  style: undefined
};

export default Header;
