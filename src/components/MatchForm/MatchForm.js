import React, { PureComponent, PropTypes } from 'react'
import { MatchFormPlayerSelect } from './components'
import styles from './styles.scss' // eslint-disable-line no-unused-vars

class MatchForm extends PureComponent {
	render() {
		return (
			<div className="match-form">
				<h2 className="base-header">Match Form</h2>
				<form onSubmit={this.props.onSubmit}>
					<div>
						<div className="end-container">
							<p className="form-field">Winner: </p>
							<MatchFormPlayerSelect
								players={this.props.playerData}
								fieldName="winner"
								onChange={this.props.onChange}
							/>
						</div>
						<div className="end-container">
							<p className="form-field">Loser: </p>
							<MatchFormPlayerSelect
								players={this.props.playerData}
								fieldName="loser"
								onChange={this.props.onChange}
							/>
						</div>
					</div>
					<div className="container">
						<input type="submit" className="submit" />
					</div>
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
