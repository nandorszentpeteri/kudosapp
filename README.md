# KudosApp - Slack Bot for Team Recognition

*A hackathon project for peer feedback and recognition within Slack teams.*

## Overview

KudosApp is a Slack bot that gamifies team feedback using a bird-themed recognition system. Team members can give each other "Condors" (positive recognition) and "Turkeys" (constructive feedback) through simple slash commands, fostering a culture of continuous improvement and appreciation.

**Status**: 🚧 Hackathon prototype - Unfinished project

## Features

### Implemented ✅
- **Condor Recognition** (`/condor`) - Give positive feedback and kudos
- **Turkey Feedback** (`/turkey`) - Provide constructive criticism
- **Leaderboard** (`/leaderboard`) - View team recognition stats
- In-memory user tracking and feedback storage
- Basic Slack integration with Bolt framework

### Planned (Not Implemented) 📋
- Persistent database storage
- Interactive feedback forms with user selection
- Detailed feedback messages and categories
- Advanced leaderboard with time periods
- Analytics and reporting
- User profiles and feedback history

## Quick Start

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd kudosapp
   npm install
   ```

2. **Set up Slack Bot**
   - Create a new Slack app at [api.slack.com](https://api.slack.com/apps)
   - Add slash commands: `/condor`, `/turkey`, `/leaderboard`
   - Install bot to your workspace
   - Get bot token and signing secret

3. **Configure environment**
   ```bash
   # Create .env file
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_SIGNING_SECRET=your-signing-secret
   PORT=3000
   ```

4. **Run the bot**
   ```bash
   npm start
   ```

## Slack Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/condor` | Give positive recognition | Recognition for great work |
| `/turkey` | Provide constructive feedback | Areas for improvement |
| `/leaderboard` | View team stats | Shows condor/turkey counts |

## Project Structure

```
kudosapp/
├── app.js          # Main Slack bot application
├── database.js     # In-memory data storage
├── package.json    # Dependencies and scripts
└── .env           # Environment variables (not tracked)
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Slack Bolt for JavaScript
- **Storage**: In-memory (temporary)
- **Environment**: dotenv for configuration

## Hackathon Context

This project was created during a hackathon with the goal of improving team dynamics through structured peer feedback. The bird theme was chosen to make feedback feel less formal and more approachable.

**Original Vision**:
- Create a fun, non-threatening way for teams to give feedback
- Gamify recognition to encourage positive team interactions
- Provide insights into team communication patterns
- Build a foundation for continuous improvement culture

## Known Limitations

- **No Persistence**: Data is lost when the bot restarts
- **Hardcoded Examples**: Contains sample data for demonstration
- **Basic UI**: Simple text responses, no rich interactions
- **No User Management**: Limited user tracking and validation
- **No Analytics**: Missing reporting and insights features

## Future Development Ideas

If continued, potential improvements could include:

1. **Database Integration**: PostgreSQL/MongoDB for data persistence
2. **Rich Interactions**: Slack Block Kit for better UX
3. **User Authentication**: Proper Slack user management
4. **Feedback Categories**: Different types of recognition/feedback
5. **Time-based Analytics**: Weekly/monthly team insights
6. **Integration**: Connect with HR systems or performance reviews
7. **Notifications**: Digest emails and reminders

## Contributing

This is a hackathon project that was never completed. Feel free to:
- Fork and continue development
- Use as inspiration for similar projects
- Extract useful patterns for Slack bot development

## License

MIT License - Feel free to use and modify as needed.

---

*Built during a hackathon with ❤️  for better team communication*
