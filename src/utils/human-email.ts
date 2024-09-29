const nonHumanEmailDomains = [
  '@no-reply',
  '@noreply',
  '@notifications',
  '@alerts',
  '@mailer',
  '@updates',
  '@system',
  '@bot',
  '@mailchimp.com',
  '@sendgrid.net',
  '@postmarkapp.com',
  '@amazonaws.com',
  '@mailgun.org',
  '@constantcontact.com',
  '@sendinblue.com',
  '@intercom.io',
  '@intercom-mail.com',
  '@zendesk.com',
  '@freshdesk.com',
  '@helpscout.net',
  '@tawk.to',
  '@hubspot.com',
  '@salesforce.com',
  '@marketo.com',
  '@pipedrive.com',
  '@drip.com',
  '@activecampaign.com',
  '@autopilotmail.com',
  '@slack.com',
  '@jira.com',
  '@trello.com',
  '@asana.com',
  '@monday.com',
  '@github.com',
  '@gitlab.com',
  '@bitbucket.org',
  '@paypal.com',
  '@stripe.com',
  '@shopify.com',
  '@bigcommerce.com',
  '@facebookmail.com',
  '@linkedin.com',
  '@twitter.com',
  '@pinterest.com',
  '@redditmail.com',
  '@medium.com',
];

const automatedKeywordsInUsername = [
  'noreply',
  'no-reply',
  'admin',
  'support',
  'system',
  'notifications',
  'bot',
  'helpdesk',
  'service',
  'info',
  'alerts',
  'updates',
  'newsletter',
  'mailer',
  'auto',
  'daemon',
  'bounce',
  'team',
  'noreplys',
  'customerservice',
  'contact',
  'autoresponder',
];

function isEmailGibberish(username: string): boolean {
  const vowelCount = username.replace(/[^aeiou]/gi, '').length;
  const consonantCount = username.replace(/[^bcdfghj-np-tv-z]/gi, '').length;

  return (
    vowelCount === 0 ||
    (consonantCount > 8 && vowelCount < 2) ||
    (username.length > 10 && vowelCount < 3)
  );
}

function hasAlternatingCharsAndNumbers(username: string): boolean {
  // eslint-disable-next-line security/detect-unsafe-regex, regexp/no-super-linear-backtracking
  const alternatingPattern = /^(?:[a-z]+\d+|\d+[a-z]+)+$/i;
  return alternatingPattern.test(username);
}

function scoreEmail(email: string): number {
  let score = 0;

  const [username, domain] = email.split('@');

  if (!username || !domain) {
    return 100;
  }

  if (nonHumanEmailDomains.some((d) => email.endsWith(d))) {
    score += 50;
  }
  if (
    automatedKeywordsInUsername.some((keyword) =>
      username.toLowerCase().includes(keyword),
    )
  ) {
    score += 30;
  }

  if (username.length > 32) {
    score += 10;
  } else if (username.length > 24) {
    score += 5;
  }

  const numberCount = username.replace(/\D/g, '').length;
  const numberDensity = numberCount / username.length;
  if (numberDensity > 0.5) {
    score += 15;
  } else if (numberDensity > 0.3) {
    score += 10;
  } else if (numberDensity > 0.1) {
    score += 5;
  }

  if (isEmailGibberish(username)) {
    score += 20;
  }

  if (hasAlternatingCharsAndNumbers(username)) {
    score += 15;
  }

  const specialCharCount = username.replace(/[a-z0-9]/gi, '').length;
  const specialCharDensity = specialCharCount / username.length;
  if (specialCharDensity > 0.3) {
    score += 15;
  } else if (specialCharDensity > 0.2) {
    score += 10;
  } else if (specialCharDensity > 0.1) {
    score += 5;
  }

  return score;
}

export function isEmailLikelyHuman(email: string, threshold = 30): boolean {
  const emailScore = scoreEmail(email);
  return emailScore < threshold;
}
