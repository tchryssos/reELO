import React, { PureComponent, PropTypes } from 'React'
import { PlayerDataRow } from './components'

class RankingTable extends PureComponent {
	get tableData() {
		return this.props.data.map(
			player => <PlayerDataRow player={player} />,
		)
	}

	render() {
		return (
			<div>
				<h2>Current Rankings</h2>
				<table>
					<tr>
						<th>Rank</th>
						<th>Player</th>
						<th>ELO</th>
					</tr>
					{this.tableData}
				</table>
			</div>
		)
	}
}

RankingTable.propTypes = {
	data: PropTypes.array,
}

export default RankingTable
