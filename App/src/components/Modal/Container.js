// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Platform, View, Modal as RNModal, TouchableWithoutFeedback } from 'react-native';
import WebModal from 'react-modal';
import { Text } from 'components';

// Assets
import { colors } from 'assets/styles';
import styles from './styles';

const webModalStyle = {
  overlay: {
    backgroundColor: colors.transparent.dark
  },
  content: {
    display: 'flex',
    position: 'static',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 0,
    borderWidth: 0,
    backgroundColor: colors.transparent.base
  }
};

const Modal = ({ opened, toggle, title, children }) => (
  <Choose>
    <When condition={Platform.OS === 'web'}>
      <WebModal
        isOpen={opened}
        onRequestClose={() => { }}
        style={webModalStyle}
      >
        <TouchableWithoutFeedback onPress={toggle}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
              <View style={styles.modalContent}>
                <Text phrase={title} style={styles.modalTitle} />
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </WebModal>
    </When>
    <Otherwise>
      <RNModal
        animationType='fade'
        transparent
        visible={opened}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={toggle}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
              <View style={styles.modalContent}>
                <Text phrase={title} style={styles.modalTitle} />
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    </Otherwise>
  </Choose>
);

Modal.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Modal;
