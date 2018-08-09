import React, { PureComponent, PropTypes } from 'React'
import { MatchFormPlayerSelect } from './components'

class MatchForm extends PureComponent {
	render() {
		return (
			<div>
				<h2>Match Form</h2>
				<form onSubmit={this.props.onSubmit}>
					<div>
						<p>Winner</p>
						<MatchFormPlayerSelect
							players={this.props.playerData}
							fieldName="winner"
							onChange={this.props.onChange}
						/>
						<p>Loser</p>
						<MatchFormPlayerSelect
							players={this.props.playerData}
							fieldName="loser"
							onChange={this.props.onChange}
						/>
					</div>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

MatchForm.propTypes = {
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	playerData: PropTypes.array,
}

export default MatchForm
