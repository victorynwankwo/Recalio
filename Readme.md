# Recalio

Turn your notes into knowledge.

Recalio is an AI study companion designed for students who want to learn faster, retain more, and study with less friction. Upload lecture notes, PDFs, and study materials, and Recalio transforms them into summaries, flashcards, quizzes, and study guides that help you practice with confidence.

## Why Recalio?

Studying is often fragmented. Students juggle scattered PDFs, messy notes, and inconsistent revision habits. Recalio brings that process into one place so learners can upload, understand, and review their materials in a structured way.

The name Recalio blends:

- Recall
- Ratio

It reflects the product goal: helping students recall more from what they study and get a better return on their effort.

## What Recalio does

Recalio helps students:

- Upload lecture notes, PDFs, and study resources
- Generate AI-powered summaries for faster comprehension
- Turn content into flashcards for active recall
- Create quizzes to test understanding and retention
- Ask an AI tutor questions about their own materials
- Build a consistent revision routine through guided study tools

## Product vision

Recalio exists to remove the friction between raw study content and real understanding. Instead of spending hours organizing notes and trying to figure out what to revise next, learners can focus on learning, practicing, and retaining knowledge.

## Core MVP features

- Email/password authentication and Google login
- Document upload and management
- AI-generated summaries
- Flashcard generation and review
- Quiz generation with scoring
- AI chat for questions based on uploaded documents
- Free and Pro plans with Stripe and Paystack support

## How it works

1. Upload notes, PDFs, and other study materials.
2. Recalio processes the content using AI.
3. The platform generates study resources such as summaries, flashcards, and quizzes.
4. Users revise smarter and track their progress over time.

## Target users

Recalio is built for:

- University and college students
- Exam candidates
- Independent learners
- Anyone who wants to turn study material into something memorable and reviewable

## Tech stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Neon

### Storage

- Cloudinary

### AI

- LLM API for summaries, flashcards, quizzes, and conversations

### Payments

- Stripe for international payments
- Paystack for Nigeria-based payments

## Project structure

```text
Recalio/
├── web/              # React frontend
├── Server/           # Express backend
├── package.json      # Root workspace metadata
└── Readme.md         # Project overview
```

## Current status

Recalio is actively in development and currently focused on the early build phases. The immediate roadmap prioritizes:

1. Authentication
2. Core document and summary flow
3. Flashcards and quizzes
4. AI chat and study personalization
5. Subscription and payment integrations

## Getting started

### Frontend

```bash
cd web
pnpm install
pnpm dev
```

### Backend

```bash
cd Server
pnpm install
```

> The backend and frontend are currently being developed as separate services, with the frontend using Vite and the backend using Express + TypeScript.

## Roadmap

### MVP

- Auth and user accounts
- File upload and storage
- Summary generation
- Flashcards
- Quizzes
- AI study chat
- Stripe/Paystack monetization

### Later phases

- Progress analytics and study streaks
- Personalized revision recommendations
- Better learning feedback loops
- Expanded document ingestion and retrieval

## Why this matters

Recalio is designed to make learning more intelligent, more organized, and more effective. It turns passive study material into interactive knowledge tools that students can actually use.

## License

This project is currently being developed as an early-stage product. License details may be updated as the repository matures.
