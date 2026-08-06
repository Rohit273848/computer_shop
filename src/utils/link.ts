export function externalLink(url: string, target = '_blank') {
  return {
    href: url,
    target,
    rel: 'noopener noreferrer',
  };
}

export function safeOpen(url: string, target = '_blank') {
  if (typeof window !== 'undefined') {
    window.open(url, target, 'noopener,noreferrer');
  }
}
