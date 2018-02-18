import React from 'react';
import PropTypes from 'prop-types';
import RNSearch from 'react-native-search-box';

import { t } from 'services';

import styles from './styles';
import { colors } from 'assets/styles';

const Search = ({ onSearch, onCancel }) => (
  <RNSearch
    ref={() => 'search'}
    backgroundColor={colors.background}
    inputStyle={styles.input}
    cancelButtonTextStyle={styles.cancel}
    onSearch={onSearch}
    onCancel={onCancel}
    placeholder={t('SEARCH.TITLE')}
    cancelTitle={t('SEARCH.CANCEL')}
    cancelButtonWidth={85}
  />
);

Search.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
