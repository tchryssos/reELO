import React, { PureComponent, PropTypes } from 'React'
import { MatchFormPlayerSelect } from './components'

class MatchForm extends PureComponent {
	render() {
		return (
			<div>
				<h2>Match Form</h2>
				<form>
					<div>
						<p>Winner</p>
						<MatchFormPlayerSelect players={this.props.data} />
						<p>Loser</p>
						<MatchFormPlayerSelect players={this.props.data} />
					</div>
				</form>
			</div>
		)
	}
}

MatchForm.propTypes = {
	data: PropTypes.array,
}

export default MatchForm
