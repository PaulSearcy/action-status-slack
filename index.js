const fetch = require('node-fetch');

const main = async () => {
    const {
        GITHUB_REPOSITORY = '',
        GITHUB_SHA = '',
        SLACK_CHANNEL = '',
        SLACK_USERNAME = '',
        SLACK_WEBHOOK = '',
        SLACK_COLOR = '',
        SLACK_TITLE = '',
        SLACK_ICON = '',
    } = process.env;

    const subject = GITHUB_REPOSITORY.split('/')[1];
    const buildLogs = `https://github.com/${GITHUB_REPOSITORY}/commit/${GITHUB_SHA}/checks`;

    const postData = {
        channel: SLACK_CHANNEL,
        username: SLACK_USERNAME,
        attachments: [
            {
                fallback: subject,
                pretext: subject,
                color: SLACK_COLOR,
                fields: [
                    {
                        title: SLACK_TITLE,
                        value: `<${buildLogs}|Build Logs>`,
                        short: false,
                    },
                ],
            },
        ],
        icon_emoji: SLACK_ICON,
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json' },
    };

    await fetch(`https://hooks.slack.com/services/${SLACK_WEBHOOK}`, options)
        .then(data => data.text())
        .then(data => console.log(data));
};

main();