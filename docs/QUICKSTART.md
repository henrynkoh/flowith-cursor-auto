# Flowith Education Hub - Quick Start Guide

Get started with Flowith Education Hub in less than 5 minutes! This comprehensive guide will help you set up your environment and start using the platform effectively.

## 🚀 Quick Installation

### Prerequisites
- Node.js 16.x or higher
- PostgreSQL 14.x or higher
- Git
- npm or yarn
- A code editor (VS Code recommended)

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/flowith-edu-hub.git

# Navigate to project directory
cd flowith-edu-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Initialize database
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

### Troubleshooting Common Installation Issues

1. **Database Connection Issues**
   ```bash
   # Check PostgreSQL status
   brew services list
   
   # Start PostgreSQL if not running
   brew services start postgresql
   ```

2. **Node Version Issues**
   ```bash
   # Check Node version
   node -v
   
   # Use nvm to switch versions if needed
   nvm use 16
   ```

3. **Port Conflicts**
   ```bash
   # Check if port 3000 is in use
   lsof -i :3000
   
   # Kill process if needed
   kill -9 <PID>
   ```

## 🎯 First Steps

### 1. Create Your Account

#### For Instructors
- Visit `http://localhost:3000/auth/signup`
- Select "Instructor" role
- Complete profile with:
  - Professional credentials
  - Teaching experience
  - Area of expertise
  - Profile photo

#### For Students
- Visit `http://localhost:3000/auth/signup`
- Select "Student" role
- Complete profile with:
  - Learning goals
  - Interests
  - Educational background
  - Profile photo

### 2. Explore Platform Features

#### Course Management
- Browse courses: `/courses`
  - Filter by category
  - Sort by popularity
  - Search by keyword
  - View course details

#### Learning Paths
- View paths: `/paths`
  - Beginner tracks
  - Intermediate courses
  - Advanced specializations
  - Custom paths

#### Automation Workflows
- Check workflows: `/workflows`
  - Assignment reminders
  - Progress tracking
  - Content scheduling
  - Integration templates

### 3. Quick Actions

#### For Instructors
1. Create a Course
   - Add course details
   - Upload materials
   - Set up modules
   - Configure assessments

2. Set Up Automations
   - Grade submissions
   - Send notifications
   - Track attendance
   - Generate reports

3. Manage Students
   - Review applications
   - Track progress
   - Provide feedback
   - Export data

#### For Students
1. Enroll in Courses
   - Browse categories
   - Check prerequisites
   - Review syllabus
   - Complete enrollment

2. Set Up Learning Tools
   - Calendar integration
   - Note-taking setup
   - Progress tracking
   - Reminder preferences

3. Join Communities
   - Study groups
   - Discussion forums
   - Peer reviews
   - Project teams

## 🔧 Basic Configuration

### Environment Variables
```env
# Required Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/flowith_db"

# Authentication Settings
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email Configuration (Optional)
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-smtp-username"
SMTP_PASSWORD="your-smtp-password"

# Storage Configuration (Optional)
S3_BUCKET_NAME="your-bucket-name"
AWS_ACCESS_KEY="your-aws-access-key"
AWS_SECRET_KEY="your-aws-secret-key"

# API Keys (Optional)
OPENAI_API_KEY="your-openai-api-key"
ZAPIER_API_KEY="your-zapier-api-key"
```

### Security Best Practices
1. Use strong passwords
2. Enable 2FA
3. Rotate API keys regularly
4. Monitor access logs
5. Regular security audits

## 📱 Mobile Access

### Mobile Web Access
- Open `http://localhost:3000` on your mobile device
- Responsive design adapts to screen size
- Touch-optimized interface
- Offline capability

### Progressive Web App Features
- Install to home screen
- Push notifications
- Offline access
- Native-like experience

### Mobile-Specific Features
- Touch gestures
- Mobile-optimized views
- Camera integration
- Location services

### Cross-Platform Support
- iOS Safari
- Android Chrome
- Mobile Firefox
- Other modern browsers

## 🆘 Need Help?

### Documentation Resources
- Full documentation: `/docs`
- API reference: `/docs/api`
- Video tutorials: `/docs/videos`
- Code examples: `/docs/examples`

### Support Channels
- Email: support@flowith.io
- Live chat: Available 24/7
- Discord: Join our community
- GitHub: Report issues

### Community Resources
- Discord server: Real-time help
- Community forums: Knowledge base
- Stack Overflow: Technical Q&A
- Reddit: r/FlowithEdu

### Additional Support
- Office hours: Weekly sessions
- Webinars: Monthly training
- Blog: Tips and updates
- Newsletter: Latest features

## 🎓 Next Steps

### 1. Dive Deeper into Documentation
- Architecture overview
- Advanced features
- Best practices
- Case studies

### 2. Join the Community
- Attend meetups
- Participate in forums
- Contribute code
- Share experiences

### 3. Watch Tutorial Series
- Getting started
- Advanced features
- Integration guides
- Best practices

### 4. Explore Advanced Features
- Custom integrations
- API development
- Workflow automation
- Analytics dashboards

### 5. Get Certified
- Platform basics
- Advanced workflows
- Integration specialist
- Course creation

### 6. Start Building
- Create courses
- Design workflows
- Build integrations
- Share templates 