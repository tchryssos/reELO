import React, { PureComponent } from 'React'
import axios from 'axios'
import { API_URL, PLAYER_LIST } from 'constants/api'
import { RankingTable, MatchForm } from 'components'

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}

	componentDidMount() {
		axios.get(`${API_URL}/${PLAYER_LIST}`).then(
			(response) => {
				const playerList = response.data.map(player => (
					{
						name: player.name,
						id: player.id,
						elo: Math.round(player.elo),
					}
				))
				const newState = Object.assign({}, this.state, {
					data: playerList,
				})
				this.setState(newState)
			},
		)
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
