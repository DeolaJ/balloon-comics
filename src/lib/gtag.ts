type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export function pageview(url: URL): void {
  if (typeof window !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
}

export function event({ action, category, label, value }: GTagEvent): void {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
