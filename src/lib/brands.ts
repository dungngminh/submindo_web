export const iconToImg: Record<string, string> = {
  'youtube-premium':        '/brands/img_youtube.webp',
  'netflix':                '/brands/img_netflix.webp',
  'gemini':                 '/brands/img_gemini.webp',
  'chatgpt-plus':           '/brands/img_chat_gpt.webp',
  'spotify':                '/brands/img_spotify.webp',
  'apple-music':            '/brands/img_apple_music.webp',
  'google-one':             '/brands/img_google_one.webp',
  'icloud-plus':            '/brands/img_icloud.webp',
  'microsoft-365':          '/brands/img_ms365.webp',
  'amazon-prime':           '/brands/img_prime.webp',
  'disney-plus':            '/brands/img_disney_plus.webp',
  'apple-tv-plus':          '/brands/img_apple_tv_plus.webp',
  'at-and-t':               '/brands/img_att.webp',
  'audible':                '/brands/img_audible.webp',
  'bumble-premium':         '/brands/img_bumble.webp',
  'canva-pro':              '/brands/img_canva_pro.webp',
  'discord-nitro':          '/brands/img_discord.webp',
  'duolingo':               '/brands/img_duolingo.webp',
  'ea-play':                '/brands/img_ea_play.webp',
  'espn-plus':              '/brands/img_espn_plus.webp',
  'figma-professional':     '/brands/img_figma.webp',
  'grammarly-premium':      '/brands/img_grammarly.webp',
  'hbo-max':                '/brands/img_hbo_max.webp',
  'myfitnesspal':           '/brands/img_myfitnesspal.webp',
  'nintendo-switch-online': '/brands/img_nintendo_switch_online.webp',
  'nordvpn':                '/brands/img_nord.webp',
  'notion-plus':            '/brands/img_notion_plus.webp',
  'nyt':                    '/brands/img_nyt.webp',
  'playstation-plus':       '/brands/img_ps_plus.webp',
  'quickbooks':             '/brands/img_quickbooks.webp',
  'siriusxm':               '/brands/img_siriusxm.webp',
  't-mobile':               '/brands/img_tmobile.webp',
  'tinder-gold':            '/brands/img_tinder.webp',
  'twitch':                 '/brands/img_twitch.webp',
  'verizon':                '/brands/img_verizon.webp',
  'xbox-game-pass':         '/brands/img_xbox.webp',
  'zoom':                   '/brands/img_zoom.webp',
  '1password':              '/brands/img_1password.webp',
  'bloomberg':              '/brands/img_bloomberg.webp',
  'calm':                   '/brands/img_calm.webp',
  'coursera':               '/brands/img_coursera.webp',
  'crunchyroll':            '/brands/img_crunchyroll.webp',
  'dropbox':                '/brands/img_dropbox.webp',
  'evernote':               '/brands/img_evernote.webp',
  'expressvpn':             '/brands/img_express.webp',
  'fitbit-premium':         '/brands/img_fitbit.webp',
  'github-copilot':         '/brands/img_github_copilot.webp',
  'headspace':              '/brands/img_headspacae.webp',
  'jetbrains':              '/brands/img_jetbrains.webp',
  'lastpass':               '/brands/img_lastpass.webp',
  'linkedin-learning':      '/brands/img_linkedin.webp',
  'masterclass':            '/brands/img_masterclass.webp',
  'medium-member':          '/brands/img_medium.webp',
  'skillshare':             '/brands/img_skillshare.webp',
  'starlink':               '/brands/img_starlink.webp',
  'strava':                 '/brands/img_strava.webp',
  'tradingview':            '/brands/img_tradingview.webp',
  'udemy':                  '/brands/img_udemy.webp',
  'vercel':                 '/brands/img_vercel.webp',
  'wsj':                    '/brands/img_wsj.webp',
  'ynab':                   '/brands/img_ynab.webp',
};

const BRANDS_URL = 'https://raw.githubusercontent.com/dungngminh/submindo_asset/refs/heads/master/type.json';

// Module-level cache — fetch runs once per build, shared across all components
let _cache: Array<{ name: string; color: string; icon: string }> | null = null;

export async function fetchBrands() {
  if (!_cache) {
    const res = await fetch(BRANDS_URL);
    const json = await res.json();
    _cache = json.data;
  }
  return _cache!;
}
