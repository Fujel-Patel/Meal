# React + Vite Meal Project

This project is a React application bootstrapped with Vite. It features a restaurant listing with search and filtering capabilities.

## Features

- React 18 with functional components and hooks
- Vite for fast development and build
- Search bar to filter restaurants by name
- Filter to show top-rated restaurants
- Responsive design for desktop and mobile
- State management with React useState and useEffect hooks

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd Meal
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to `http://localhost:3000` (or the port shown in the terminal).

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build/` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Environment Variables

This project uses environment variables for API URLs and other configurations. Create a `.env` file in the root directory and add your variables. Make sure `.env` is included in `.gitignore` to avoid pushing sensitive data.

Example `.env`:

```
VITE_API_URL=https://your-api-url.com
```

## Folder Structure

- `src/` - Source code
  - `Components/` - React components
  - `features/` - Redux slices or feature-specific code
  - `Hooks/` - Custom React hooks
  - `assets/` - Images and static assets
- `public/` - Public static files
- `build/` - Production build output

