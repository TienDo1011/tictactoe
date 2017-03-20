import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { move, reset } from '../../actions';
import ButtonComponent from '../presentationals/ButtonComponent.jsx';

const shortid = require('shortid');

const mapStateToProps = state => ({
  board: state.board,
  hasDrawn: state.hasDrawn,
  hasWon: state.hasWon,
  nextPlayer: state.nextPlayer,
  openSpaces: state.openSpaces,
});

const mapDispatchToProps = dispatch => ({
  move: i => dispatch(move(i)),
  reset: () => dispatch(reset()),
});

function App(props) {
  return (
    <section>
      <Grid>
        <Row>
          {props.board
            .map((e, index) => {
              return (
                <ButtonComponent
                  key={shortid.generate()} onClick={props.move} player={e} index={index}
                />
              )}
            )}
        </Row>
      </Grid>
    </section>
  );
}

App.propTypes = {
  board: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  move: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
