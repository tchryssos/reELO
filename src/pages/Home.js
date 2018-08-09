import React, { PureComponent } from 'react'
import axios from 'axios'
import { API_URL, PLAYER_LIST, UPDATE_ELO } from 'constants/api'
import { RankingTable, MatchForm } from 'components'

import styles from './styles.scss' // eslint-disable-line no-unused-vars

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

	componentDidMount() {
		this.getPlayers()
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

	// Match Form
	formSubmit(event) {
		event.preventDefault()
		return axios.post(`${API_URL}/${UPDATE_ELO}`, {
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

	// Render
	render() {
		return (
			<div>
				<div>
					<h1 className="header">Reelio Smash</h1>
					<div className="container">
						<RankingTable playerData={this.state.playerData} />
						<MatchForm
							playerData={this.state.playerData}
							onSubmit={this.formSubmit}
							onChange={this.handleChangePlayerForm}
						/>
					</div>
				</div>
				<div className="background" />
			</div>
		)
	}
}

export default Home
