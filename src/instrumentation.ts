export async function register() {
  // we can configure the imports by using conditional statements
  await import('../sentry.client.config');
  await import('../sentry.server.config');
  // await import('../sentry.server.config');
  await import('../sentry.edge.config');
}
