import React, { PropTypes, PureComponent } from 'React'
import styles from '../styles.scss' // eslint-disable-line no-unused-vars

class PlayerDataRow extends PureComponent {
	render() {
		return (
			<tr>
				<td className="text">{this.props.player.rank}</td>
				<td className="text">{this.props.player.name}</td>
				<td className="text">{this.props.player.elo}</td>
			</tr>
		)
	}
}

PlayerDataRow.propTypes = {
	player: PropTypes.object,
}

export default PlayerDataRow
