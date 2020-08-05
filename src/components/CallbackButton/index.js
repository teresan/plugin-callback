import React from 'react';
import { Actions, withTheme } from '@twilio/flex-ui';

class CallbackButton extends React.PureComponent {
	render() {
		return (
			<button
				onClick={() => Actions.invokeAction('StartOutboundCall', {destination: this.props.task.attributes.customerNumber})}
			>
                Callback</button>
		);
	}
}

export default withTheme(CallbackButton);