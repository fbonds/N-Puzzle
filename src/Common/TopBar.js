import React, { PropTypes } from 'react';
import { AppBar, IconMenu, IconButton, MenuItem } from 'material-ui';

import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import Colors from 'material-ui/lib/styles/colors';


/**
 * React class to display a top bar that at the moment only displays the name
 * of the application.
 */
export default class TopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    N: PropTypes.number.isRequired,
    changeGame: PropTypes.func.isRequired
  };

  /**
   * The required function for every react class it returns how
   * the top bar will look like.
   * @return {AppBar} A react class form material-ui theme
   */
  render() {
    let N = this.props.N * this.props.N - 1;
    let icon = (
      <IconButton>
        <NavigationMenu color={Colors.grey50} />
      </IconButton>
      );
    let menuItems = [ ...Array(6).keys() ].map(index => index + 2).map((value) =>
      <MenuItem
        key={ value }
        onClick={ this.props.changeGame.bind(N, value) }
        primaryText={ value + '-Puzzle' } />
    );

    let iconMenu = (
      <IconMenu iconButtonElement={icon} openDirection={'bottom-right'} >
        {menuItems}
      </IconMenu>
    );

    return (<AppBar iconElementLeft={ iconMenu } title={ N + '-Puzzle' } />);
  }
}
