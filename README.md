# FlyingChangesFarmSite

Website for Flying Changes Farm (flyingchangesfarm.net)

## Firebase Hosting Setup

This repository is configured for Firebase Hosting deployment.

### Prerequisites

Install Firebase CLI tools globally:

```bash
npm install -g firebase-tools
```

### Initial Setup

1. **Login to Firebase:**
   ```bash
   firebase login
   ```

2. **Initialize Firebase Hosting:**
   ```bash
   firebase init hosting
   ```
   
   During initialization:
   - Select or create your Firebase project
   - Use `public` as your public directory
   - Configure as a single-page app: No
   - Don't overwrite existing files

3. **Update `.firebaserc`:**
   
   After initialization, update `.firebaserc` with your actual Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```

### Deployment

Deploy the site to Firebase Hosting:

```bash
firebase deploy --only hosting
```

## Project Structure

```
FlyingChangesFarmSite/
├── public/           # Static files served by Firebase Hosting
│   └── index.html    # Main landing page
├── firebase.json     # Firebase configuration
├── .firebaserc       # Firebase project settings
└── README.md         # This file
```

## Future Development

This repository will contain multiple subprojects organized in separate folders:

- `/public` - Main static website content
- Future subproject folders will be added as needed for additional features and functionality