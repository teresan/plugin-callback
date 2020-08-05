import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CallbackButton from './components/CallbackButton';


const PLUGIN_NAME = 'CallbackPlugin';

export default class CallbackPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    this.registerReducers(manager);

    flex.TaskCanvasHeader.Content.add(<CallbackButton key="callback-button" />, {
      sortOrder: 1,
      if : props => props.task.attributes.taskType === "callback" 
    });

  }

  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }
  }
}
