# CI/CD Demo — Presentation Ready

A tiny static web project designed to demonstrate Continuous Integration and Continuous Delivery live during a presentation.

## What the pipeline does

Every Pull Request:
- installs dependencies
- runs automated tests
- builds the application

Every push to `main`:
- runs the same CI checks
- creates a build artifact
- deploys it to GitHub Pages

## Local demo

```bash
npm ci
npm test
npm run build
```

The production-ready site is generated in `dist/`.

## GitHub setup

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub: Settings → Pages → Source: GitHub Actions.
4. Push another small UI change.
5. Open Actions and show the CI → CD flow.

## Best live demo sequence

1. Push a working change → green Test → green Build → Deploy.
2. Open the deployed site and show the change.
3. Intentionally break the test (`2 + 2` → `5`) and push.
4. Show that CI fails and CD does not run.
5. Fix the test and push again.
6. Show green CI and successful deployment.

Presentation line:

> CI validates the change. Continuous Delivery keeps the application ready to release.
