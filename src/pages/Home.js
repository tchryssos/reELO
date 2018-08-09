import React, { PureComponent } from 'React'
import axios from 'axios'
import { API_URL, PLAYER_LIST } from 'constants/api'
import { RankingTable, MatchForm } from 'components'

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			playerData: [],
			matchForm: {
				winner: '',
				loser: '',
			},
		}

		this.formSubmit = this.formSubmit.bind(this)
		this.getPlayers = this.getPlayers.bind(this)
		this.handleChangePlayerForm = this.handleChangePlayerForm.bind(this)
	}

	getPlayers() {
		axios.get(`${API_URL}/${PLAYER_LIST}`).then(
			(response) => {
				const newState = Object.assign({}, this.state, {
					playerData: response.data,
				})
				this.setState(newState)
			},
		)
	}

	componentDidMount() {
		this.getPlayers()
	}

	formSubmit(event) {
		event.preventDefault()
		axios.post(`${API_URL}/update-elo`, {
			winner: this.state.matchForm.winner,
			loser: this.state.matchForm.loser,
		}).then(
			this.getPlayers(),
		)
	}

	handleChangePlayerForm(event) {
		event.preventDefault()
		const newFormState = Object.assign({}, this.state.matchForm, {
			[event.target.name]: event.target.value,
		})
		const newState = Object.assign({}, this.state, {
			matchForm: newFormState,
		})
		this.setState(newState)
	}

	render() {
		return (
			<div>
				<h1>Reelio Smash</h1>
				<RankingTable playerData={this.state.playerData} />
				<MatchForm
					playerData={this.state.playerData}
					onSubmit={this.formSubmit}
					onChange={this.handleChangePlayerForm}
				/>
			</div>
		)
	}
}

export default Home
