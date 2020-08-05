exports.handler = function(context, event, callback) {
    const taskAttributes = {
        customerNumber: event.customerNumber,
        taskType: 'callback',
        task: 'pending',
    };
    
    context.getTwilioClient().taskrouter.workspaces(context.FLEX_WORKSPACE)
     .tasks
     .create({attributes: JSON.stringify(taskAttributes), workflowSid: context.FLEX_WORKFLOW_SID})
     .then(task => {
        console.log(task.sid)
        callback(null, task.sid);   
     });
};