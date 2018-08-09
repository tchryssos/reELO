import React, { PropTypes, PureComponent } from 'react'
import { SMASH_WII_U_CHARACTERS as CHARS } from 'constants/characters'
import { sortBy } from 'lodash'
import styles from '../styles.scss' // eslint-disable-line no-unused-vars

class MatchFormPlayerSelect extends PureComponent {
	get playerOptions() {
		const players = sortBy(this.props.players, ['name']).map(
			player => (
				<option value={player.id}>
					{player.name}
				</option>
			),
		)
		players.unshift(
			<option disabled selected value>
				-Choose a player-
			</option>,
		)
		return players
	}

	get characterOptions() {
		const characters = CHARS.map(
			character => (
				<option value={character.id}>
					{character.name}
				</option>
			),
		)
		characters.unshift(
			<option disabled selected value>
				-Choose a character-
			</option>,
		)
		return characters
	}

	get characterDisplay() {
		if (this.props.characterChoice) {
			return (
				<div>
					<p>Player Character</p>
					<select>
						{this.characterOptions}
					</select>
				</div>
			)
		}
		return null
	}


	render() {
		return (
			<select
				name={this.props.fieldName}
				onChange={this.props.onChange}
				className="select"
			>
				{this.playerOptions}
			</select>
		)
	}
}

MatchFormPlayerSelect.propTypes = {
	characterChoice: PropTypes.bool,
	fieldName: PropTypes.string,
	onChange: PropTypes.func,
	players: PropTypes.array,
}

MatchFormPlayerSelect.defaultProps = {
	characterChoice: true,
}

export default MatchFormPlayerSelect
