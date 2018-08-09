import React, { PureComponent, PropTypes } from 'React'
import { PlayerDataRow } from './components'
import styles from './styles.scss' // eslint-disable-line no-unused-vars

class RankingTable extends PureComponent {
	get tableData() {
		return this.props.playerData.map(
			player => <PlayerDataRow player={player} />,
		)
	}

	render() {
		return (
			<div>
				<h2 className="base-header">Current Rankings</h2>
				<table className="table">
					<tbody>
						<tr>
							<th className="table-header">Rank</th>
							<th className="table-header">Player</th>
							<th className="table-header">ELO</th>
						</tr>
						{this.tableData}
					</tbody>
				</table>
			</div>
		)
	}
}

RankingTable.propTypes = {
	playerData: PropTypes.array,
}

export default RankingTable
