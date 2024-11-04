# Hello Again Rewards App

This project is a React Native app developed as a test assginment for Hello Again company. The app allows users to view and collect rewards from a list fetched via the provided API. It showcases React Native with a focus on state management using Redux, efficient data fetching and custom UI logic. The project is organized as a package-based monorepo using Nx for scalable and maintainable code management.

## Features

- **Reward Collection**: Users can browse available rewards, each displayed with a "Collect" button.
- **Dynamic UI Updates**: Collected rewards change appearance (e.g., 50% opacity) and are disabled to prevent re-collection.
- **Infinite Scrolling**: New rewards load as the user scrolls to the end of the list, optimizing performance.
- **Collected Rewards View**: A separate screen displays rewards collected by the user.
- **Nx Monorepo Structure**: Code is organized into reusable packages within an Nx workspace, making it easy to scale and manage dependencies.

## Tech Stack

- **TypeScript**: Ensures type safety and reduces runtime errors.
- **React Native**: Provides a cross-platform framework for both iOS and Android.
- **Nx Monorepo**: Allows for efficient workspace organization and dependency management in a package-based structure.
- **Redux**: Manages state efficiently across the app, handling both collected rewards and available rewards.
- **React Navigation**: Handles navigation between screens, including a tab for rewards and collected items.
- **React Native Paper**: Enhances UI components for a modern and responsive look.
- **Zod**: Validates API responses for safer data handling.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/gugell/rewards-hub.git
```

### Step 2: Install the packages

```bash
yarn install
```

### Step 3: Install native packages

```bash
cd apps/mobile/ios
pod install
```

### Step 4: Run the app

```bash
yarn start
```

### Step 5: Open the Xcode project and run it on your target

## Improvements & Future Enhancements

- Better lookup logic for collected items: Store them in the local storage or persistence for later use.
- Error Handling: Improve error feedback for a smoother user experience i.e. Introduce Retry logic.

## Let me know your thoughts:

- [Linkedin](https://www.linkedin.com/in/iliagutu/)
- [Telegram](https://t.me/gugell)
