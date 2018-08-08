import React, { PropTypes, PureComponent } from 'React'
import { SMASH_WII_U_CHARACTERS as CHARS } from 'constants/characters'

class MatchFormPlayerSelect extends PureComponent {
	get playerOptions() {
		const players = this.props.players.map(
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
			<div>
				<div>
					<select name={this.props.fieldName}>
						{this.playerOptions}
					</select>
				</div>
				{/* {this.characterDisplay} */}
			</div>
		)
	}
}

MatchFormPlayerSelect.propTypes = {
	characterChoice: PropTypes.bool,
	fieldName: PropTypes.string,
	players: PropTypes.array,
}

MatchFormPlayerSelect.defaultProps = {
	characterChoice: true,
}

export default MatchFormPlayerSelect
