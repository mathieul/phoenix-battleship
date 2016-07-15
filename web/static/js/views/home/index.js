import React, { PropTypes }     from 'react';
import { connect }              from 'react-redux';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import { fetchGames }           from '../../actions/home';
import NewGameButton            from '../../components/game/new_game_button';
import ListItem                 from '../../components/game/list_item';
import Logo                     from '../../components/common/logo';
import { setDocumentTitle }     from '../../utils';

import Elm from 'react-elm-components';
import { PhoenixBattleship } from '../../../elm/phoenixbattleship.js';

class HomeIndexView extends React.Component {
  componentDidMount() {
    const { dispatch, lobbyChannel } = this.props;

    setDocumentTitle('Ahoy, Matey!');
    dispatch(fetchGames(lobbyChannel));
  }

  _renderCurrentGames() {
    const { currentGames } = this.props;

    if (currentGames.length === 0) return false;

    const gameNodes = currentGames.map((game) => {
      return (
        <ListItem key={game.id} game={game}/>
      );
    });

    return (
      <section>
        <h2>Current games</h2>
        <ul className="current-games">
          <ReactCSSTransitionGroup
            transitionName="item"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {gameNodes}
          </ReactCSSTransitionGroup>
        </ul>
      </section>
    );
  }

  render() {
    const { lobbyChannel, dispatch } = this.props;

    return (
      <div id="home_index" className="view-container">
        <header>
          <Logo/>
          <h1>Ahoy Matey, <br/>welcome to Phoenix Battleship!</h1>
          <Elm src={PhoenixBattleship} />
          <p>The <a target="_blank" href="https://en.wikipedia.org/wiki/Battleship_(game)">Good Old game</a>, built with <a target="_blank" href="http://elixir-lang.org/">Elixir</a>, <a target="_blank" href="http://www.phoenixframework.org/">Phoenix</a>, <a target="_blank" href="http://facebook.github.io/react/">React</a> and <a target="_blank" href="http://redux.js.org/">Redux</a></p>
          <NewGameButton lobbyChannel={lobbyChannel} dispatch={dispatch}>Start new battle, arr!</NewGameButton>
        </header>
        {::this._renderCurrentGames()}
        <footer>
          <p>crafted with ♥ by <a target="_blank" href="http://codeloveandboards.com/">@bigardone</a></p>
          <p><a target="_blank" href="https://github.com/bigardone/phoenix-battleship"><i className="fa fa-github"/> source code</a></p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { ...state.session, ...state.home }
);

export default connect(mapStateToProps)(HomeIndexView);
