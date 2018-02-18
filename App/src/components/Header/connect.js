import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { back } from 'config/navigation';

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(back()),
  drawerToggle: () => dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen' }))
});

export default connect(null, mapDispatchToProps);
