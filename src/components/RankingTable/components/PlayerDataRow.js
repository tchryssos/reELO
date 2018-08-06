import React, { PropTypes, PureComponent } from 'React'

class PlayerDataRow extends PureComponent {
	render() {
		return (
			<tr>
				<td>{this.props.player.rank}</td>
				<td>{this.props.player.name}</td>
				<td>{this.props.player.elo}</td>
			</tr>
		)
	}
}

PlayerDataRow.propTypes = {
	player: PropTypes.object,
}

export default PlayerDataRow
