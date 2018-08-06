import React, { PureComponent } from 'React'
import { RankingTable, MatchForm } from 'components'

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ rank: 1, name: 'Troy', elo: 2000, id: 111 },
				{ rank: 2, name: 'Bill', elo: 1800, id: 222 },
				{ rank: 3, name: 'Charlie', elo: 1700, id: 333 },
			],
		}
	}

	render() {
		return (
			<div>
				<h1>Reelio Smash</h1>
				<RankingTable data={this.state.data} />
				<MatchForm data={this.state.data} />
			</div>
		)
	}
}

export default Home
