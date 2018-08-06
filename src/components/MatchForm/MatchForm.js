import React, { PureComponent, PropTypes } from 'React'
import { MatchFormPlayerSelect } from './components'

class MatchForm extends PureComponent {
	render() {
		return (
			<div>
				<h2>Match Form</h2>
				<form>
					<div>
						<p>Player 1</p>
						<MatchFormPlayerSelect players={this.props.data} />
						<p>Player 2</p>
						<MatchFormPlayerSelect players={this.props.data} />
						<p>Winner</p>
						<MatchFormPlayerSelect
							players={this.props.data}
							characterChoice={false}
						/>
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
