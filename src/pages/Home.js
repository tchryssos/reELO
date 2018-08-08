import React, { PureComponent } from 'React'
import axios from 'axios'
import { API_URL, PLAYER_LIST } from 'constants/api'
import { RankingTable, MatchForm } from 'components'

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			playerData: [],
		}
	}

	componentDidMount() {
		axios.get(`${API_URL}/${PLAYER_LIST}`).then(
			(response) => {
				const newState = Object.assign({}, this.state, {
					playerData: response.data,
				})
				this.setState(newState)
			},
		)
	}

	render() {
		return (
			<div>
				<h1>Reelio Smash</h1>
				<RankingTable playerData={this.state.playerData} />
				<MatchForm playerData={this.state.playerData} />
			</div>
		)
	}
}

export default Home
