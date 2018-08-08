import React, { PureComponent, PropTypes } from 'React'
import { API_URL } from 'constants/api'
import { MatchFormPlayerSelect } from './components'

class MatchForm extends PureComponent {
	render() {
		return (
			<div>
				<h2>Match Form</h2>
				<form>
					<div>
						<p>Winner</p>
						<MatchFormPlayerSelect players={this.props.playerData} fieldName="winner" />
						<p>Loser</p>
						<MatchFormPlayerSelect players={this.props.playerData} fieldName="loser" />
					</div>
					<input type="submit" method="PATCH" action={`${API_URL}/update-elo`} />
				</form>
			</div>
		)
	}
}

MatchForm.propTypes = {
	playerData: PropTypes.array,
}

export default MatchForm
