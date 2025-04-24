const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Check if .env file exists, if not create one with placeholder values
if (!fs.existsSync('.env')) {
  console.log('Creating .env file with placeholder values...');
  fs.writeFileSync('.env', `
# API Keys
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Other Configuration
VITE_APP_NAME=ArtSpark
  `);
  console.log('✅ .env file created');
}

// Build the project
console.log('Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Deploy to Vercel
console.log('Deploying to Vercel...');
try {
  execSync('vercel --prod --yes', { stdio: 'inherit' });
  console.log('✅ Deployment completed successfully');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}

console.log('🎉 Deployment process completed!');
console.log('Your site should be available at: https://ai-project-final.vercel.app'); 